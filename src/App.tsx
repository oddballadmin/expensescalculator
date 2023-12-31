import React from "react";
import EnterIncome from "./components/pages/EnterIncome";

import { IncomeProvider} from "./context/IncomeContext";

const App = () => {

    return(
        <IncomeProvider>
            <EnterIncome />
        </IncomeProvider>
    );
    

}
export default App;