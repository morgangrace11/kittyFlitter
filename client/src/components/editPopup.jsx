import React from 'react';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { editToggle } from '../actions';

class EditPopup extends React.Component {
  constructor(props) {
    super(props);

    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleEditSubmit(e) {
    Axios
      .put('/api/edit', {
        id: this.props.id,
        event: this.props.event,
        time: this.props.time,
        date: this.props.date,
      })
      .then(() => {
        this.props.editToggle();
        this.props.get();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        {this.props.eToggle ? <div>
          <div className="popup-main">
            <form>
              <div>
                <TextField label="Event" onChange={this.props.handleEventChange} />
              </div>
              <div>
                <TextField label="Time" onChange={this.props.handleTimeChange} />
              </div>
              <div>
                <Button onClick={this.handleEditSubmit} variant='outlined' style={{ width: '90px' }} size='large'>Submit</Button>
              </div>
            </form>
            <Button onClick={this.props.editToggle} variant='outlined' style={{ width: '90px' }} size='large'>Cancel</Button>
          </div>
        </div> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { id, event, time, date, eToggle } = state;
  return { id, event, time, date, eToggle };
}

export default connect(mapStateToProps, { editToggle })(EditPopup);
