import { Fragment } from "react";
import ColumnHeading from "./components/columnHeading";
import FrontRow from "./components/frontRow";
import SeatsRow from "./components/seatsRow";
import Card from "./components/UI/card";
import classes from './App.module.css';

const n = 148; // take this as user input
var sequence = [1, 4, 5, 8, 0, 9, 2, 3, 6, 7];

// '#ffc65e' is Orange, '#b5caf9' is Blue, '7eba7e' is Green,
var color = [
  '#ffc65e',
  '#ffc65e',
  '#ffc65e',
  '#ffc65e',
  '#b5caf9',
  '#b5caf9',
  '#7eba7e',
  '#7eba7e',
  '#7eba7e',
  '#7eba7e',
];

function App() {
  var seats = [];

  for (let index = 0; index <= Math.floor(n / 10); index++) {
    seats.push([1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  var customerNo = 1;

  for (let i = 0; i <= Math.floor(n / 10); i++) {
    var j = 0;

    while (j <= 9) {
      if (customerNo <= n) {
        seats[i][sequence[j]] = {
          seatNo: customerNo,
          color: color[j],
        };
      } else {
        seats[i][sequence[j]] = {
          seatNo: "",
          color: color[j],
        };
      }

      j++;
      customerNo++;
    }
  }

  console.log(seats);

  return (
    <Fragment>
      <Card>
        <div className={classes.cardContentWrapper}>
          <FrontRow />
          <ColumnHeading />
          {seats.map((seatsRow, index) => (
            <SeatsRow key={index} currentRowArray={seatsRow} />
          ))}
        </div>
      </Card>
    </Fragment>
  );
}

export default App;
