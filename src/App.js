import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import ExpenseItem from "./components/ExpenseItem";
import AllocationForm from "./components/AllocationForm";
import Currency from "./components/Currency";

// Add code to import the other components here under

import { AppProvider } from "./context/AppContext";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          {
            // Budget component
            <div className="col-sm">
              <Budget />
            </div>
          }
          {
            //Remaining component
            <div className="col-sm">
              <Remaining />
            </div>
          }
          {
            //ExpenseTotal component
            <div className="col-sm">
              <ExpenseTotal />
            </div>
          }
          {
            //Currency component
            <div className="col-sm">
              <Currency />
            </div>
          }
        </div>

        <h3>Allocation</h3>
        {
          //ExpenseList component
          <div className="col-sm">
            <ExpenseList />
          </div>
        }

        <h3>Change Allocation</h3>
        {
          //AllocationForm component
          <div className="col-sm">
            <AllocationForm />
          </div>
        }
      </div>
    </AppProvider>
  );
};
export default App;
