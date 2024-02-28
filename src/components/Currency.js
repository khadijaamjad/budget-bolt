import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }

  return (
    <div className="alert alert-success">
      <select
        name="currencies"
        id="currencies"
        onChange={(event) => changeCurrency(event.target.value)}
        style={{ border: 'none', width: '100%', backgroundColor: 'transparent'}}
      >
        <option value="$">$ Dollar</option>
        <option value="£" selected>£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};
export default Currency;
