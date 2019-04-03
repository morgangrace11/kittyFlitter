import React from 'react';
import ListItem from './listItem.jsx';

const List = (props) => (
  <div>
    <h2 className="upcoming" >Upcoming Events</h2>
    <div id="listDiv">
      {props.data.map((event, index) => {
        return <ListItem handleDeleteClick={props.handleDeleteClick} handleEditClick={props.handleEditClick} event={event} key={index} />
      })}
    </div>
  </div>
)

export default List;
