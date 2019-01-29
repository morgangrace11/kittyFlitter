import React from 'react';

const EditPopup = (props) => (
  <div id="popup">
    <div id="popup-main">
      <form>
        ID:
      <input type="text" onChange={props.handleIdChange} required />
        Event:
    <input type="text" onChange={props.handleEventChange} required />
        <br />
        Time:
    <input type="time" onChange={props.handleTimeChange} required />
        <br />
        <input onClick={props.handleEditClick} type="button" value="submit" />
      </form>
      <button onClick={props.handleEditExit} >cancel</button>
    </div>
  </div>
);

export default EditPopup;