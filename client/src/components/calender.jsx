import React from 'react';
import Popup from './calenderPopup.jsx';

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
          <td onClick={props.handleCalClick}>1</td>
          <td onClick={props.handleCalClick}>2</td>
          <td onClick={props.handleCalClick}>3</td>
        </tr>
        <tr>
          <td onClick={props.handleCalClick}>4</td>
          <td onClick={props.handleCalClick}>5</td>
          <td onClick={props.handleCalClick}>6</td>
          <td onClick={props.handleCalClick}>7</td>
          <td onClick={props.handleCalClick}>8</td>
          <td onClick={props.handleCalClick}>9</td>
          <td onClick={props.handleCalClick}>10</td>
        </tr>
        <tr>
          <td onClick={props.handleCalClick}>11</td>
          <td onClick={props.handleCalClick}>12</td>
          <td onClick={props.handleCalClick}>13</td>
          <td onClick={props.handleCalClick}>14</td>
          <td onClick={props.handleCalClick}>15</td>
          <td onClick={props.handleCalClick}>16</td>
          <td onClick={props.handleCalClick}>17</td>
        </tr>
        <tr>
          <td onClick={props.handleCalClick}>18</td>
          <td onClick={props.handleCalClick}>19</td>
          <td onClick={props.handleCalClick}>20</td>
          <td onClick={props.handleCalClick}>21</td>
          <td onClick={props.handleCalClick}>22</td>
          <td onClick={props.handleCalClick}>23</td>
          <td onClick={props.handleCalClick}>24</td>
        </tr>
        <tr>
          <td onClick={props.handleCalClick}>25</td>
          <td onClick={props.handleCalClick}>26</td>
          <td onClick={props.handleCalClick}>27</td>
          <td onClick={props.handleCalClick}>28</td>
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