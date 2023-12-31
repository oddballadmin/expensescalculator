import React, { useContext, useState, useEffect } from "react";
import { IncomeContext } from "../../context/IncomeContext";

type CalcIncomeType = {
    price: number;
};

type PropsType = {
    items: CalcIncomeType[];
};

const CalculatedIncome = ({ items }: PropsType) => {
    const context = useContext(IncomeContext);

    if (!context) {
        throw new Error('CalculatedIncome must be used within an IncomeProvider');
    }

    const { income } = context; // Assuming income is an object with a 'value' property
    const [leftOverIncome, setLeftOverIncome] = useState<number>(income.value);

    const [addedExpenses, setAddedExpenses] = useState<number>(0);
    const [incomeStlye,setIncomeStlye]=useState<string>('green');
    useEffect(() => {
        
        const totalExpenses = items.reduce((sum, item) => sum + item.price, 0);
        setAddedExpenses(totalExpenses);
        
    }, [items]);
    useEffect(() => {
        const newLeftOverIncome = income.value - addedExpenses;
        setLeftOverIncome(newLeftOverIncome);
        setIncomeStlye(newLeftOverIncome <= 0 ? 'red' : 'green');
    }, [income.value, addedExpenses]);

    // Calculate leftover income as a derived state
    const leftoverIncome = income.value - addedExpenses;

    return (
        <div className="income-remaining">
            <h1>Your Leftover Income Is:</h1>
           <h1 className={incomeStlye}> ${leftoverIncome.toFixed(2)}</h1>
        </div>
    );
};

export default CalculatedIncome;
