import React from 'react';
import moment from 'moment';

const listItem = (props) => (
  <div className="listContent">
    <div className="eventList" >{moment(`${props.event.date} ${props.event.time}`).calendar()}: {props.event.event}</div>
    <div>
      <img className="icon" id={props.event.id} onClick={props.handleEditClick} src="edit.png" width="20" height="20" />
      <img className="icon" id={props.event.id} onClick={props.handleDeleteClick} src="delete.png" width="20" height="20" />
    </div>
  </div>
)

export default listItem;
