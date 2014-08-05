/** @jsx React.DOM */

var React = require('react'),
  DatePicker = require('./DatePicker.jsx');

var DatePickerInput = React.createClass({
    /**
     *
     * @returns {{date: Date}}
     */
    getDefaultProps: function() {
        return(
        {
          date : new Date(),
          beforeUpdate :
            function(date) {
              return date;
          },
          classNamePrefix : "datepicker"
        });
    },
    /**
     *
     * @returns {{show: boolean}}
     */
    getInitialState: function() {
        return {show:false};
    },
    showDatePicker: function() {
        this.setState({show:true});
    },
    hideDatePicker: function() {
        this.setState({show:false});
    },
    /**
     *
     * @param {Date} date
     */
    onChangeDate: function(date) {
        this.props['date'] = date;
        this.setState({show:false});
    },
    render: function() {
        var style = {
          position:'fixed',
          top:0,
          left:0,
          width:'100%',
          height:'100%',
          display: (this.state.show ? 'block' : 'none')
        };

        return (
            <div>
                <div style={style} onClick={this.hideDatePicker}></div>
                <div className={this.props.classNamePrefix + "-wrapper"}>
                {this.transferPropsTo(<DatePicker show={this.state.show} />)}
                </div>
                <input type="text" onFocus={this.showDatePicker} value={this.props.beforeUpdate(this.props['date'])} />
            </div>
            );
    }
});

module.exports = DatePickerInput;