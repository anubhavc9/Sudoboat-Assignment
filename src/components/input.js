import classes from "./input.module.css";

const Input = () => {
  return (
    <div className={classes.formWrapper}>
      <form action="/action_page.php">
        <label for="noOfPass">Number of passengers:</label>
        <div className={classes.formInner}>
          <input type="text" id="noOfPass" name="fname" />
          <button type="submit" value="Submit">
            Click here to calculate seating!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
