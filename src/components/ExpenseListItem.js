import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, created_at, dispatch }) => (
    <div>
        <h3>Description: {description}</h3>
        <p>Amount: {numeral(amount/100).format('$0,0.00')}</p>
        <p>Created At: {moment(created_at).format('D MMM, YYYY ')}</p>
        <Link to={`/edit/${id}`}>Edit Expense</Link>
    </div>
);

export default ExpenseListItem;