import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

moment.locale('tr');

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString()  : '',
      created_at: props.expense ? moment(props.expense.created_at) : moment(),
      calendar_focused: false,
      error: ''
    };
  
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = (created_at) => {
    if (created_at)
      this.setState(() => ({ created_at }));
  }

  onCalendarFocusChange = ({ focused }) => {
    this.setState(() => ({ calendar_focused: focused }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'There was an error' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount*100),
        note: this.state.note,
        created_at: this.state.created_at.valueOf()
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange} />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange} />
          <SingleDatePicker
            date={this.state.created_at}
            onDateChange={this.onDateChange}
            focused={this.state.calendar_focused}
            onFocusChange={this.onCalendarFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)."
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>{this.props.submitButtonText ? this.props.submitButtonText : "Add Expense"}</button>
        </form>
      </div>
    );
  }
}
