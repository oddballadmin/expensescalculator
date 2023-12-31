import React, { useContext, type FormEvent, useState } from 'react';
import {IncomeContext} from '../../context/IncomeContext';
import EnterExpenses from './EnterExpenses';

const EnterIncome = () => {
    const context = useContext(IncomeContext);

    if (!context) {
        throw new Error('EnterIncome must be used within an IncomeProvider');
    }

    const { income, setIncome } = context;
    
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsFormSubmitted(false);
        setIncome({ ...income, value: parseInt(e.target.value, 10) });

    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setIsFormSubmitted(true);
    }

    return (
        <div>
        <form className="income-in input-form" onSubmit={onSubmit}>
            <label htmlFor="EnterIncome">Enter Your monthly income</label>
            <input 
                type="number"
                placeholder="Income"
                id="getIncome"
                onChange={handleIncomeChange}
            />
            <div className="btn-group">

            <button type="reset">Reset</button>
            <button type='submit'>Submit</button>
            </div>
            </form>
            {isFormSubmitted && <p className='income-init'>Your income is ${income.value}</p>}
            {isFormSubmitted ? <EnterExpenses/> : <p className='income-init'>Enter Income To Proceed</p>}            
        </div>

    );
  
};

export default EnterIncome;
 