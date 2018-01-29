import uuid from 'uuid';

/*
*
*   Expense Actions
*   
*/

export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        created_at = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount, // Pennies
        created_at,
    }
});

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});