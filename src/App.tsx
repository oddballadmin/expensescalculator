import React from "react";
import EnterIncome from "./components/pages/EnterIncome";
import EnterExpenses from "./components/pages/EnterExpenses";
import {IncomeProvider} from "./context/IncomeContext";
import { StrictMode } from "react";

const App = () => {

    return(
        <StrictMode>
        <IncomeProvider>
            <EnterIncome />
            <EnterExpenses />
        </IncomeProvider>
        </StrictMode>
    );
    

}
export default App;