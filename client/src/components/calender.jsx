import React from 'react';
import Popup from './popup.jsx';

const Calendar = (props) => (
  <div id="calender">
    <h2 id="month">February</h2>
    <table>
      <tbody>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          <td className="otherMonth">28</td>
          <td className="otherMonth">29</td>
          <td className="otherMonth">30</td>
          <td className="otherMonth">31</td>
          <td onClick={props.handleClick}>1</td>
          <td onClick={props.handleClick}>2</td>
          <td onClick={props.handleClick}>3</td>
        </tr>
        <tr>
          <td onClick={props.handleClick}>4</td>
          <td onClick={props.handleClick}>5</td>
          <td onClick={props.handleClick}>6</td>
          <td onClick={props.handleClick}>7</td>
          <td onClick={props.handleClick}>8</td>
          <td onClick={props.handleClick}>9</td>
          <td onClick={props.handleClick}>10</td>
        </tr>
        <tr>
          <td onClick={props.handleClick}>11</td>
          <td onClick={props.handleClick}>12</td>
          <td onClick={props.handleClick}>13</td>
          <td onClick={props.handleClick}>14</td>
          <td onClick={props.handleClick}>15</td>
          <td onClick={props.handleClick}>16</td>
          <td onClick={props.handleClick}>17</td>
        </tr>
        <tr>
          <td onClick={props.handleClick}>18</td>
          <td onClick={props.handleClick}>19</td>
          <td onClick={props.handleClick}>20</td>
          <td onClick={props.handleClick}>21</td>
          <td onClick={props.handleClick}>22</td>
          <td onClick={props.handleClick}>23</td>
          <td onClick={props.handleClick}>24</td>
        </tr>
        <tr>
          <td onClick={props.handleClick}>25</td>
          <td onClick={props.handleClick}>26</td>
          <td onClick={props.handleClick}>27</td>
          <td onClick={props.handleClick}>28</td>
          <td className="otherMonth">1</td>
          <td className="otherMonth">2</td>
          <td className="otherMonth">3</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Calendar;


{/* <ReactTable
  data={data}
  columns={
    [
      {
        Header: 'Monday',
        accessor: 'monday'
      },
      {
        Header: 'Tuesday',
        accessor: 'tuesday'
      },
      {
        Header: 'Wednesday',
        accessor: 'wednesday'
      },
      {
        Header: 'Thursday',
        accessor: 'thursday'
      },
      {
        Header: 'Friday',
        accessor: 'friday'
      },
      {
        Header: 'Saturday',
        accessor: 'saturday'
      },
      {
        Header: 'Sunday',
        accessor: 'sunday'
      }
    ]
  }
  defaultPageSize={10}
  classNameName="-striped -highlight"
/> */}