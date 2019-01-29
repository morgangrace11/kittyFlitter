import React from 'react';
import ListItem from './listItem.jsx';

const List = (props) => (
  <div id="listDiv">
    <h2>Upcoming Events hjgugy</h2>
    {props.data.map((event, index) => {
      return <ListItem handleEditClick={props.handleEditClick} event={event} key={index} />
    })}
  </div>
)

export default List;