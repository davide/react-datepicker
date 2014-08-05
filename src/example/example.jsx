/** @jsx React.DOM */

var React = require('react'),
  DatePicker = require('../js/ui/datepicker/DatePicker.jsx'),
  DatePickerInput = require('../js/ui/datepicker/DatePickerInput.jsx');

React.renderComponent(
    <DatePicker date={new Date(2010, 0, 4)} />,
    document.getElementById('datepicker')
);

/**
 * @param {Date} date
 * @returns {Date|string|number}
 */
var formatDate = function(date) {
    var output = '';
    output+=date.getMonth()+1+'/';
    output+=date.getDate()+'/';
    output+=date.getFullYear();
    return output;
}

React.renderComponent(
    <DatePickerInput date={new Date(2012, 0, 4)} beforeUpdate={formatDate} />,
    document.getElementById('datepicker-input')
);
