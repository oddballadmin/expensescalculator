import React, { useContext, type FormEvent, useState } from 'react';
import IncomeContext from '../../context/IncomeContext';

const EnterIncome = () => {
    const context = useContext(IncomeContext);

    if (!context) {
        throw new Error('EnterIncome must be used within an IncomeProvider');
    }

    const { income, setIncome } = context;
    
    const [isFormSubmitted, setIsFormSubmitted] = useState<Boolean>(false);

    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsFormSubmitted(false);
        setIncome({ ...income, value: parseInt(e.target.value, 10) });

    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setIsFormSubmitted(true);
    }

    return (
        <>
        <form className="input-form" onSubmit={onSubmit}>
            <label htmlFor="EnterIncome">Enter Your monthly income</label>
            <input 
                type="number"
                placeholder="Income"
                id="getIncome"
                onChange={handleIncomeChange}
            />
            <div className="btn-group">

            <button type="reset">Reset</button>
            <button>Submit</button>
            </div>
            {isFormSubmitted && <label htmlFor="income">Your income is ${income.value}</label>}
            </form>
        </>
    );
};

export default EnterIncome;
