/** @jsx React.DOM */

var React = require('react'),
  MonthPicker = require('./MonthPicker.jsx'),
  DayPicker = require('./DayPicker.jsx');

var DatePicker = React.createClass({
    /**
     *
     * @param {Date} date
     */
    onChangeVisibleDate: function(date) {
        this.setState({visibleDate:date});
    },
    /**
     *
     * @param {Date} date
     */
    onChangeSelectedDate: function(date) {
        this.setState({visibleDate:date});
        this.props['onChangeDate'](date);
    },
    /**
     *
     * @returns {{date: Date, show: boolean, onChangeDate: Function}}
     */
    getDefaultProps: function() {
        return({'date':new Date(), 'show':true, 'onChangeDate': function(date) {
            console.log('You have selected new date' + date);
        }});
    },
    /**
     *
     * @returns {{visibleDate: Date}}
     */
    getInitialState: function() {
        var date = new Date();
        date.setTime(this.props['date'].getTime());
        return({visibleDate:date});
    },
    /**
     *
     * @param {number} year
     */
    changeYear: function(year) {
        var date = new Date();
        date.setTime(this.state.visibleDate.getTime());
        date.setFullYear(year);
        this.setState({visibleDate:date});
    },
    /**
     *
     * @param {number} month
     */
    changeMonth: function(month) {
        var date = new Date();
        date.setTime(this.state.visibleDate.getTime());
        date.setMonth(month);
        this.setState({visibleDate:date});
    },
    render: function () {
        var style = {display:(this.props['show']?'block':'none')};
        return (
            <div className="datepicker" style={style}>
                <div className="datepicker-container">
                    <MonthPicker date={this.state.visibleDate} onChangeMonth={this.changeMonth} />

                    <DayPicker date={this.state.visibleDate} selectedDate={this.props['date']} changeDate={this.onChangeVisibleDate} selectDate={this.onChangeSelectedDate} />
                </div>
            </div>
            );
    }
});

module.exports = DatePicker;