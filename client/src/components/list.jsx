import React from 'react';
import Axios from 'axios';
import ListItem from './listItem.jsx';
import { connect } from 'react-redux';
import { editToggle, editId } from '../actions';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleEditClick(e) {
    this.props.editToggle();
    this.props.editId(e.target.id);
  }

  handleDeleteClick(e) {
    Axios
      .delete('/api/delete', {
        data: {
          id: e.target.id,
        }
      })
      .then(() => {
        this.props.get();
      }).catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h2 className="upcoming" >Upcoming Events</h2>
        <div id="listDiv">
          {this.props.list.map((event, index) => {
            return <ListItem handleDeleteClick={this.handleDeleteClick} handleEditClick={this.handleEditClick} event={event} key={index} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { list } = state;
  return { list };
}

export default connect(mapStateToProps, { editToggle, editId })(List);
