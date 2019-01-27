import React from 'react';

const Popup = (props) => (
  <div id="popup">
    <div id="popup-main">
      <form>
        Event:
    <input type="text" />
        <br />
        Time:
    <input type="text" />
        <br />
        <input onClick={props.handleClick} type="submit" />
      </form>
      <button onClick={props.handleClick} >cancel</button>
    </div>
  </div>
);

export default Popup;