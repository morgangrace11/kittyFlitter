import React from 'react';

const DeletePopup = (props) => (
  <div id="popup">
    <div id="popup-main">
      <form>
        ID:
      <input type="text" onChange={props.handleIdChange} required />
        <br />
        <input onClick={props.handleDeleteClick} type="button" value="submit" />
      </form>
      <button onClick={props.handleDeleteExit} >cancel</button>
    </div>
  </div>
);

export default DeletePopup;