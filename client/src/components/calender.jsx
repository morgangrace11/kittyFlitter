import React from 'react';
import Button from '@material-ui/core/Button';
import January from './calendarMonths/january.jsx';
import February from './calendarMonths/february.jsx';
import March from './calendarMonths/march.jsx';
import April from './calendarMonths/april.jsx';
import May from './calendarMonths/may.jsx';
import June from './calendarMonths/June.jsx'
import July from './calendarMonths/july.jsx';
import August from './calendarMonths/august.jsx';
import September from './calendarMonths/september.jsx';
import October from './calendarMonths/october.jsx';
import November from './calendarMonths/november.jsx';
import December from './calendarMonths/december.jsx'

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      date: new Date(),
      currMonth: '',

    }
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      currMonth: this.state.date.getMonth(),
    })
  }


  handlePrevClick() {
    this.setState({
      currMonth: this.state.currMonth - 1
    });
  }

  handleNextClick() {
    this.setState({
      currMonth: this.state.currMonth + 1
    });
  }

  render() {
    return (
      <div>
        <div className="calHeader">
          <Button variant='outlined' style={{ color: 'rgb(233, 183, 54)', borderColor: 'rgb(233, 183, 54)', }} size='small' onClick={this.handlePrevClick}>Previous</Button>
          <h2 id="month">{this.state.months[this.state.currMonth]}</h2>
          <Button variant='outlined' style={{ color: 'rgb(233, 183, 54)', borderColor: 'rgb(233, 183, 54)', }} size='small' onClick={this.handleNextClick}>Next</Button>
        </div>
        {this.state.months[this.state.currMonth] === 'January' ? <January handleCalClick={this.props.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'February' ? <February handleCalClick={this.props.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'March' ? <March handleCalClick={this.props.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'April' ? <April handleCalClick={this.props.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'May' ? <May handleCalClick={this.props.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'June' ? <June handleCalClick={this.props.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'July' ? <July handleCalClick={this.props.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'August' ? <August handleCalClick={this.props.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'September' ? <September handleCalClick={this.props.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'October' ? <October handleCalClick={this.props.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'November' ? <November handleCalClick={this.props.handleCalClick} /> : null}
        {this.state.months[this.state.currMonth] === 'December' ? <December handleCalClick={this.props.handleCalClick} /> : null}
      </div>
    )
  }
}

export default Calendar;
