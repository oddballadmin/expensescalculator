import React,{ useContext, useState } from "react";
import { IncomeContext } from "../../context/IncomeContext";

type calcIncomeType = {
    price: number;
}
const CalculatedIncome = ()=>{
    const context = useContext(IncomeContext);
    const [expensePriceList, setexpensePriceList] = useState<calcIncomeType[]>([])
    if (!context) {
        throw new Error('EnterIncome must be used within an IncomeProvider');
    }

    const { income, setIncome } = context;




}
export default CalculatedIncome;