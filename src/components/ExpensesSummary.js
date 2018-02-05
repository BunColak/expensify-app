import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpensesSummary = (props) => (
  <div>
    <h4>Viewing {props.expenses.length || 0} expenses, total amount: {numeral(getExpensesTotal(props.expenses)/100).format('$0,0.00')} dollars.</h4>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpensesSummary);