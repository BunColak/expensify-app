import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';




const getVisibleExpenses = (expenses, { text, sort_by, start_date, end_date }) => {
    return expenses.filter((expense) => {
        const start_date_match = typeof start_date !== 'number' || expense.created_at >= start_date;
        const end_date_match = typeof end_date !== 'number' || expense.created_at <= end_date;
        const text_match = expense.description.toLowerCase().includes(text.toLowerCase());

        return start_date_match && end_date_match && text_match;
    }).sort((a, b) => {
        if (sort_by === 'date') {
            return a.created_at < b.created_at ? 1 : -1;
        } else if (sort_by === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visible_expenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visible_expenses);
})

const expense_one = store.dispatch(addExpense({ description: 'Rent', amount: 2500, created_at: 924}));
const expense_two = store.dispatch(addExpense({ description: 'Coffee', amount: 250, created_at: 1000 }));

// store.dispatch(removeExpense( { id: expense_one.expense.id} ));
// store.dispatch(editExpense(expense_two.expense.id, { amount: 5 }));
// store.dispatch(setTextFilter('rENt'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'randomajadfasd',
        description: 'Rent',
        note: 'Lorem ipsum dolor sit amet',
        amount: 54500, // Pennies
        created_at: 0,
    }],
    filters: {
        text: 'rent',
        sort_by: 'amount', // date or amount
        start_date: undefined,
        end_date: undefined
    }
};

{…},