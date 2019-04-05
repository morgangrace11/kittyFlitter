import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EditPopup = (props) => (
  <div>
    <div className="popup-main">
      <form>
        <div>
          <TextField label="Event" onChange={props.handleEventChange} />
        </div>
        <div>
          <TextField label="Time" onChange={props.handleTimeChange} />
        </div>
        <div>
          <Button onClick={props.handleEditSubmit} variant='outlined' style={{ width: '90px' }} size='large'>Submit</Button>
        </div>
      </form>
      <Button onClick={props.handleEditExit} variant='outlined' style={{ width: '90px' }} size='large'>Cancel</Button>
    </div>
  </div>
);

export default EditPopup;
