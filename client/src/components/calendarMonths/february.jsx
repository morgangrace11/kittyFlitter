import React from 'react';

const February = (props) => {
  return (
    <div id="calender">
      <table>
        <tbody>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td className="otherMonth">27</td>
            <td className="otherMonth">28</td>
            <td className="otherMonth">29</td>
            <td className="otherMonth">30</td>
            <td className="otherMonth">31</td>
            <td id="2" onClick={props.handleCalClick}>1</td>
            <td id="2" onClick={props.handleCalClick}>2</td>
          </tr>
          <tr>
            <td id="2" onClick={props.handleCalClick}>3</td>
            <td id="2" onClick={props.handleCalClick}>4</td>
            <td id="2" onClick={props.handleCalClick}>5</td>
            <td id="2" onClick={props.handleCalClick}>6</td>
            <td id="2" onClick={props.handleCalClick}>7</td>
            <td id="2" onClick={props.handleCalClick}>8</td>
            <td id="2" onClick={props.handleCalClick}>9</td>
          </tr>
          <tr>
            <td id="2" onClick={props.handleCalClick}>10</td>
            <td id="2" onClick={props.handleCalClick}>11</td>
            <td id="2" onClick={props.handleCalClick}>12</td>
            <td id="2" onClick={props.handleCalClick}>13</td>
            <td id="2" onClick={props.handleCalClick}>14</td>
            <td id="2" onClick={props.handleCalClick}>15</td>
            <td id="2" onClick={props.handleCalClick}>16</td>
          </tr>
          <tr>
            <td id="2" onClick={props.handleCalClick}>17</td>
            <td id="2" onClick={props.handleCalClick}>18</td>
            <td id="2" onClick={props.handleCalClick}>19</td>
            <td id="2" onClick={props.handleCalClick}>20</td>
            <td id="2" onClick={props.handleCalClick}>21</td>
            <td id="2" onClick={props.handleCalClick}>22</td>
            <td id="2" onClick={props.handleCalClick}>23</td>
          </tr>
          <tr>
            <td id="2" onClick={props.handleCalClick}>24</td>
            <td id="2" onClick={props.handleCalClick}>25</td>
            <td id="2" onClick={props.handleCalClick}>26</td>
            <td id="2" onClick={props.handleCalClick}>27</td>
            <td id="2" onClick={props.handleCalClick}>28</td>
            <td className="otherMonth">1</td>
            <td className="otherMonth">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default February;
