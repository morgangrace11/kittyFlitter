import React from 'react';

const listItem = (props) => (
  <div>
    <span>{props.event.id} -- {props.event.date}: {props.event.event} at {props.event.time}</span>
    <button onClick={props.handleEditClick} >edit</button>
    <button onClick={props.handleDeleteClick}>delete</button>
    <img src="../../../client/dist/1.png" />
  </div>
)

export default listItem;
