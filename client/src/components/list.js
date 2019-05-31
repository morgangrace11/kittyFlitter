import React from 'react';
import ListItem from './listItem.jsx';
import { connect } from 'react-redux';

const List = (props) => (
  <div>
    <h2 className="upcoming" >Upcoming Events</h2>
    <div id="listDiv">
      {props.list.map((event, index) => {
        return <ListItem handleDeleteClick={props.handleDeleteClick} handleEditClick={props.handleEditClick} event={event} key={index} />
      })}
    </div>
  </div>
)

const mapStateToProps = (state) => {
  const { list } = state;
  return { list };
}

export default connect(mapStateToProps)(List);
