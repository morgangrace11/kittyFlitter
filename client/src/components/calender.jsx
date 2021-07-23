import React from 'react';
import Button from '@material-ui/core/Button';
// import January from './calendarMonths/january.jsx';
// import February from './calendarMonths/february.jsx';
// import March from './calendarMonths/march.jsx';
// import April from './calendarMonths/april.jsx';
// import May from './calendarMonths/may.jsx';
// import June from './calendarMonths/june.jsx'
// import July from './calendarMonths/july.jsx';
// import August from './calendarMonths/august.jsx';
// import September from './calendarMonths/september.jsx';
// import October from './calendarMonths/october.jsx';
// import November from './calendarMonths/november.jsx';
// import December from './calendarMonths/december.jsx'
import CalendarMonth from './calendarMonth.jsx';
import { replaceDate, calenderToggle } from '../actions';
import { connect } from 'react-redux';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      date: new Date(),
      currMonthNumber: '',
      currentMonth: '',
      currDaysInMonth: '',
      prevDaysInMonth: '',
      nextDaysInMonth: '',
      firstDay: '',
      currentYear: '',
      currentWeekday: ''
    }
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleCalClick = this.handleCalClick.bind(this);
  }

  componentDidMount() {
    //if the current chosen month is january we need a way to find if previous or next was clicked to change the year
    //can do this in handle click methods for prev and click 
    let year = this.state.date.getFullYear();
    let month = this.state.date.getMonth();
    let currentWeekday = new Date(year, month, 1).getDay();
    //use this day for the month component to find the days needed to be populated from the last months dates when this month doesnt start
    //on sunday
    let currentDay = this.state.date.getDay();
    //update setState with our new date information
    /*
    TODO: curr next and prev days is going to need some handling here for when it is january
          or it is december maybe split logic out into it's own function so there's less code repeating.
          For now getting calendar component to work will refactor later. 
    */
   console.log(month)
    this.setState({
      currMonthNumber: month,
      currentMonth: this.state.months[month],
      currentYear: year,
      currentWeekday: currentWeekday,
      currDaysInMonth: new Date(year, month+1, 0).getDate(),
      prevDaysInMonth: new Date(year, month, 0).getDate(),
      nextDaysInMonth: new Date(year, month + 2, 0).getDate(),
    })
  }

  handleCalClick(e) {
    this.props.calenderToggle();
    this.props.replaceDate(`${e.target.id}/${e.target.innerHTML}/${this.state.currentYear}`);
  }

  handlePrevClick() {
    if (this.state.currMonthNumber === 0) {
      this.setState({
        currMonthNumber: 11,
        currentMonth: 'December',
        currentYear: this.state.currentYear - 1,
        currentWeekday: new Date(this.state.currentYear - 1, 11, 1).getDay(),
        currDaysInMonth: new Date(this.state.currentYear - 1, 12, 0).getDate(),
        prevDaysInMonth: new Date(this.state.currentYear - 1, 11, 0).getDate(),
        nextDaysInMonth: new Date(this.state.currentYear + 1, 1, 0).getDate()
      });
    } else {
      console.log(this.state.currMonthNumber, this.state.currMonthNumber - 2, this.state.currMonthNumber)

      this.setState({
        currMonthNumber: this.state.currMonthNumber - 1,
        currentMonth: this.state.months[this.state.currMonthNumber - 1],
        currentWeekday: new Date(this.state.currentYear, this.state.currMonthNumber - 1, 1).getDay(),
        //need non zero indexed month number so current month is correct then +/- that number
        currDaysInMonth: new Date(this.state.currentYear, this.state.currMonthNumber, 0).getDate(), 
        prevDaysInMonth: new Date(this.state.currentYear, this.state.currMonthNumber - 1, 0).getDate(), 
        nextDaysInMonth: new Date(this.state.currentYear, this.state.currMonthNumber + 1, 0).getDate()
      });
    }
  }

  handleNextClick() {
    if (this.state.currMonthNumber === 11) {
      this.setState({
        currMonthNumber: 0,
        currentMonth: 'January',
        currentYear: this.state.currentYear + 1,
        currentWeekday: new Date(this.state.currentYear + 1, 0, 1).getDay(),
        currDaysInMonth: new Date(this.state.currentYear + 1, 1, 0).getDate(),
        prevDaysInMonth: new Date(this.state.currentYear - 1, 12, 0).getDate(),
        nextDaysInMonth: new Date(this.state.currentYear + 1, 2, 0).getDate()
      });
    } else {
      console.log(this.state.currMonthNumber + 2, this.state.currMonthNumber + 1, this.state.currMonthNumber + 2)
      this.setState({
        currMonthNumber: this.state.currMonthNumber + 1,
        currentMonth: this.state.months[this.state.currMonthNumber  + 1],
        currentWeekday: new Date(this.state.currentYear, this.state.currMonthNumber + 1, 1).getDay(),
        //need non zero indexed month number so current month needs + 2 to  get correct number, only a + 1 for last month (zero indexed version), and + 3 for the next month. 
        //Ex. currMonth: 6 -> 6 + 1 for zero indexed 7 -> 6 + 2 for non zero indexed 8 - august
        currDaysInMonth: new Date(this.state.currentYear, this.state.currMonthNumber + 2, 0).getDate(),
        prevDaysInMonth: new Date(this.state.currentYear, this.state.currMonthNumber + 1, 0).getDate(),
        nextDaysInMonth: new Date(this.state.currentYear, this.state.currMonthNumber + 3, 0).getDate()
      });
    }
  }

  render() {
    return (
      <div>
        <div className="calHeader">
          <Button variant='outlined' style={{ height: '50px', width: '90px', color: 'rgb(233, 183, 54)', borderColor: 'rgb(233, 183, 54)', }} size='small' onClick={this.handlePrevClick}>Previous</Button>
          <h2 id="month">{this.state.months[this.state.currMonthNumber]} - {this.state.currentYear}</h2>
          <Button variant='outlined' style={{ height: '50px', width: '90px', color: 'rgb(233, 183, 54)', borderColor: 'rgb(233, 183, 54)', }} size='small' onClick={this.handleNextClick}>Next</Button>
        </div>
        <CalendarMonth 
          // todo: send all month data down to cal month component (month, dayofweek, numofdays)
          month={this.state.currentMonth}
          currentWeekday={this.state.currentWeekday}
          currDaysInMonth={this.state.currDaysInMonth}
          nextDaysInMonth={this.state.nextDaysInMonth}
          prevDaysInMonth={this.state.prevDaysInMonth}
        />

        {/* {this.state.months[this.state.currMonth] === 'January' ? <January handleCalClick={this.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'February' ? <February handleCalClick={this.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'March' ? <March handleCalClick={this.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'April' ? <April handleCalClick={this.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'May' ? <May handleCalClick={this.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'June' ? <June handleCalClick={this.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'July' ? <July handleCalClick={this.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'August' ? <August handleCalClick={this.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'September' ? <September handleCalClick={this.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'October' ? <October handleCalClick={this.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'November' ? <November handleCalClick={this.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'December' ? <December handleCalClick={this.handleCalClick} /> : null} */}
      </div >
    )
  }
}

const mapStateToProps = state => {
  const { calToggle } = state;
  return { calToggle };
};

export default connect(mapStateToProps, { calenderToggle, replaceDate })(Calendar);
