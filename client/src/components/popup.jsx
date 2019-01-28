import React from 'react';

const Popup = (props) => (
  <div id="popup">
    <div id="popup-main">
      <form>
        Event:
    <input type="text" onChange={props.handleEventChange} required />
        <br />
        Time:
    <input type="time" onChange={props.handleTimeChange} required />
        <br />
        <input onClick={props.handleClick} type="button" value="submit" />
      </form>
      <button onClick={props.handleClick} >cancel</button>
    </div>
  </div>
);

export default Popup;