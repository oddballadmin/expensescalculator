import React, { useState, useContext } from "react";
import ExpenseList from "./ExpenseList";
import CalculatedIncome from "./CalculatedIncome";

type ListItemType = {
    name: string;
    price: number;
};

type PriceListType = {
    price: number;
};

const EnterExpense = () => {
    const [expenseCompleteList, setExpenseCompleteList] = useState<ListItemType[]>([]);
    const [expenseName, setExpenseName] = useState<string>('');
    const [expensePrice, setExpensePrice] = useState<number>(0);
    const [isExpenseFormSubmitted, setIsExpenseFormSubmitted] = useState<boolean>(false);
    const [expensePriceList, setExpensePriceList] = useState<PriceListType[]>([]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsExpenseFormSubmitted(true);
        addExpenseToList({ name: expenseName, price: expensePrice });
    };

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpenseName(e.target.value);
    };

    const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpensePrice(parseFloat(e.target.value));
    };

    const addExpenseToList = (expense: ListItemType) => {
        setExpenseCompleteList([...expenseCompleteList, expense]);
        setExpensePriceList([...expensePriceList, { price: expense.price }]);
    };

    const handleReset = () => {
        setExpenseCompleteList([]);
        setExpensePriceList([]);
        setIsExpenseFormSubmitted(false);
    };

    return (
        <div className="">
        <h1>Enter Your Expenses</h1>
        <form onSubmit={onSubmit} className="expense-in input-form">
            <label htmlFor="enterName">Enter Expense Name</label>            
            <input type="text" name="enterName" id="expense-name" placeholder="Enter Name" onChange={changeName}/>
            <label htmlFor="enterPrice">Enter Expense Price</label> 
            <input type="number" name="enterPrice" id="expense-price" placeholder="Enter Price" onChange={changePrice}/>
            <div className="btn-group">
                <button type="reset" onClick={handleReset}>Reset</button>
                <button type="submit">Submit</button>
            </div>
        </form>
            {isExpenseFormSubmitted && <ExpenseList items={expenseCompleteList}/>}
            {isExpenseFormSubmitted && <CalculatedIncome items={expensePriceList} />}
        </div>
    );
};

export default EnterExpense;
