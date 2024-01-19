import "./App.css";
import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "deposit":
      return {
        ...state,
        balance: state.balance + 150,
      };

    case "isOpen": {
      return {
        ...state,
        isActive: true,
      };
    }

    case "withdraw": {
      return {
        ...state,
        balance: state.balance - 50,
      };
    }

    case "requestLoan": {
      return {
        ...state,
        balance: state.balance + 5000,
        loan: 5000,
      };
    }

    case "payLoan": {
      return {
        ...state,
        loan: 0,
        balance: state.balance - 5000,
      };
    }

    case "closeAccount": {
      return {
        ...initialState,
      };
    }

    default:
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const desable = !state.isActive;

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {state.balance}</p>
      <p>Loan: {state.loan}</p>

      <p>
        <button
          onClick={() => dispatch({ type: "isOpen" })}
          disabled={!desable}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "deposit" })}
          disabled={desable}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw" })}
          disabled={desable}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "requestLoan" })}
          disabled={state.loan > 0 ? true : desable}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={desable}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "closeAccount" })}
          disabled={desable}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
