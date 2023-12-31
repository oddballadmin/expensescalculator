import React, { createContext, useState, type ReactNode } from 'react';

// Define a type for the income state
type IncomeType = {
    value: number;
};

type ExpensesListType = {
    value: number;
}

// Define a type for the context values
interface IncomeContextType {
    income: IncomeType;
    setIncome: (income: IncomeType) => void;
}

interface ExpensesContextType {
    expenseList: ExpensesListType[];
    setExpenseList: (expenseList: ExpensesListType[]) => void;
}

type IncomeProviderProps = {
    children: ReactNode;
};

type ExpenseProviderProps = {
    children: ReactNode;
};

// Create the contexts with initial values
export const IncomeContext = createContext<IncomeContextType | undefined>(undefined);
export const ExpenseListContext = createContext<ExpensesContextType | undefined>(undefined);

export const IncomeProvider = ({ children }: IncomeProviderProps) => {
    const [income, setIncome] = useState<IncomeType>({ value: 0 });

    return (
        <IncomeContext.Provider value={{ income, setIncome }}>
            {children}
        </IncomeContext.Provider>
    );
};

export const ExpenseListProvider = ({ children }: ExpenseProviderProps) => {
    const [expenseList, setExpenseList] = useState<ExpensesListType[]>([]);

    return (
        <ExpenseListContext.Provider value={{ expenseList, setExpenseList }}>
            {children}
        </ExpenseListContext.Provider>
    );
};

