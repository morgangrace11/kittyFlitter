import React from 'react';
import Button from '@material-ui/core/Button';
import January from './calendarMonths/january.jsx';
import February from './calendarMonths/february.jsx';
import March from './calendarMonths/march.jsx';
import April from './calendarMonths/april.jsx';
import May from './calendarMonths/may.jsx';
import June from './calendarMonths/june.jsx'
import July from './calendarMonths/july.jsx';
import August from './calendarMonths/august.jsx';
import September from './calendarMonths/september.jsx';
import October from './calendarMonths/october.jsx';
import November from './calendarMonths/november.jsx';
import December from './calendarMonths/december.jsx'
import { replaceDate, calenderToggle } from '../actions';
import { connect } from 'react-redux';

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
    this.handleCalClick = this.handleCalClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      currMonth: this.state.date.getMonth(),
    })
  }

  handleCalClick(e) {
    this.props.calenderToggle();
    this.props.replaceDate(`${e.target.id}/${e.target.innerHTML}/2019`);
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
          <Button variant='outlined' style={{ height: '50px', width: '90px', color: 'rgb(233, 183, 54)', borderColor: 'rgb(233, 183, 54)', }} size='small' onClick={this.handlePrevClick}>Previous</Button>
          <h2 id="month">{this.state.months[this.state.currMonth]}</h2>
          <Button variant='outlined' style={{ height: '50px', width: '90px', color: 'rgb(233, 183, 54)', borderColor: 'rgb(233, 183, 54)', }} size='small' onClick={this.handleNextClick}>Next</Button>
        </div>
        {this.state.months[this.state.currMonth] === 'January' ? <January handleCalClick={this.handleCalClick} /> : null}
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
        {this.state.months[this.state.currMonth] === 'December' ? <December handleCalClick={this.handleCalClick} /> : null}
      </div >
    )
  }
}

const mapStateToProps = state => {
  const { calToggle } = state;
  return { calToggle };
};

export default connect(mapStateToProps, { calenderToggle, replaceDate })(Calendar);
