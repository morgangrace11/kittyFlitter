import React from 'react';

const listItem = (props) => (
  <div>
    <span className="eventList" >{props.event.id} -- {props.event.date}: {props.event.event} at {props.event.time}</span>
    <img className="icon" onClick={props.handleEditClick} src="edit.png" width="20" height="20" />
    <img className="icon" onClick={props.handleDeleteClick} src="delete.png" width="20" height="20" />
  </div>
)

export default listItem;
