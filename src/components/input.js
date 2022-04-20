import { useRef, useState } from "react";
import classes from "./input.module.css";

const Input = (props) => {
  const passengersInputRef = useRef();
  const [inputValidity, setInputValidity] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if(passengersInputRef.current.value < 11 || passengersInputRef.current.value > 200) {
        setInputValidity(false);
        return;
    }
    
    // if the above checks passed, user input is valid!
    setInputValidity(true);
    props.onFormSubmit(passengersInputRef.current.value);
  };

  return (
    <div className={classes.formWrapper}>
      <form action="/action_page.php">
        <label htmlFor="noOfPass">Number of passengers:</label>
        <div className={classes.formInner}>
          <input
            type="text"
            id="noOfPass"
            name="fname"
            ref={passengersInputRef}
            className={inputValidity ? '' : `${classes.invalid}`}
          />
          <button type="submit" value="Submit" onClick={formSubmitHandler}>
            Click here to calculate seating!
          </button>
        </div>
        {!inputValidity && <span>Input cannot be empty, less than 11 or more than 200!</span>}
      </form>
    </div>
  );
};

export default Input;
