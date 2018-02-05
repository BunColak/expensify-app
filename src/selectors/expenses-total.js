const getExpensesTotal = (expenses) => {
  let total = 0;
  
  if(expenses.length === 0)
    return 0;

  expenses.forEach((expense) => {
    expense.amount ? total += expense.amount : total += 0;
  });

  return total;
};

export default getExpensesTotal;