import React,{ useState } from "react"
import ExpenseList from "./ExpenseList";
const EnterExpense = ()=>{

    type expenseType = {
        name: string,
        price: number,
    }
    const [expenseName,setExpenseName] = useState('');
    const [expensePrice,setExpensePrice] = useState(0);
    const [isFormSubmitted,setIsFormSubmitted] = useState<Boolean>(false)

    const [expenseList,setExpenseList] = useState<expenseType[]>([]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        addExpenseToList({name: expenseName,price: expensePrice});
        setIsFormSubmitted(true);
    }
    const changeName = (e: React.ChangeEvent<HTMLInputElement>)=>{

        setExpenseName(e.target.value);
    }
    const changePrice = (e: React.ChangeEvent<HTMLInputElement>)=>{

        setExpensePrice(parseFloat(e.target.value));
    }

    const addExpenseToList = (newExpense:expenseType)=>{
        setExpenseList(
            [...expenseList,newExpense]
        )
    }
    const resetList = (newExpense: expenseType)=>{
        setExpenseList(
            []
        );
    }


    return(
        <form onSubmit={onSubmit} className="input-form">
            <label htmlFor="enterName">Enter Expense Name</label>            
            <input type="text" name="enterName" id="expense-name" placeholder="Enter Name" onChange={changeName}/>
            <label htmlFor="enterPrice">Enter Expense Price</label> 
            <input type="text" name="enterPrice" id="expense-price" placeholder="Enter Price" onChange={changePrice}/>
            <div className="btn-group">
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </div>
            {
                isFormSubmitted && <ExpenseList items={expenseList}/>
            }
        </form>
    
        


    )


}
export default EnterExpense;