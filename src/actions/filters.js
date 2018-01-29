/*
*
*   Filter Actions
*
*/

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const setStartDate = (start_date) => ({
    type: 'SET_START_DATE',
    start_date
});

export const setEndDate = (end_date) => ({
    type: 'SET_END_DATE',
    end_date
});