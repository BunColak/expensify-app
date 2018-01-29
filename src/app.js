import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/style.scss'
import 'normalize.css/normalize.css';
import moment from 'moment';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 200, note: 'fuck this', created_at: moment() }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, note: 'fuck this', created_at: moment() }));
store.dispatch(addExpense({ description: 'Rent', amount: 195, note: 'fuck this', created_at: moment() }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));