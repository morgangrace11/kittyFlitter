import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { calenderToggle } from '../actions';
import Axios from 'axios';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.handleCalSubmitClick = this.handleCalSubmitClick.bind(this);
  }

  handleCalSubmitClick() {
    var data = {
      event: this.props.event,
      time: this.props.time,
      date: this.props.date,
      username: this.props.username,
    };
    this.props.calenderToggle();
    Axios.post('/api/event', data).then(() => {
      this.props.get();
    });
  }

  render() {
    return (
      <div>
        {this.props.calToggle ?
          <div>
            <div className="popup-main">
              <form>
                <div>
                  <TextField label="Event" onChange={this.props.handleEventChange} />
                </div>
                <div>
                  <TextField type="time" onChange={this.props.handleTimeChange} />
                </div>
                <div>
                  <Button onClick={this.handleCalSubmitClick} variant='outlined' style={{ width: '90px' }} size='large'>Submit</Button>
                </div>
              </form>
              <Button onClick={this.props.calenderToggle} variant='outlined' style={{ width: '90px' }} size='large'>Cancel</Button>
            </div>
          </div> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { date, time, event, username, calToggle } = state;
  return { date, time, event, username, calToggle };
};

export default connect(mapStateToProps, { calenderToggle })(Popup);