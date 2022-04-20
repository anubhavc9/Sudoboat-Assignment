import { Fragment, useState } from "react";
import ColumnHeading from "./components/columnHeading";
import FrontRow from "./components/frontRow";
import SeatsRow from "./components/seatsRow";
import Card from "./components/UI/card";
import classes from './App.module.css';
import Input from "./components/input";

var sequence = [1, 4, 5, 8, 0, 9, 2, 3, 6, 7]; // the sequence in which a row is to be filled

// '#fccf9d' is Orange, '#b5caf9' is Blue, '7eba7e' is Green,
var color = [
  '#fccf9d',
  '#fccf9d',
  '#fccf9d',
  '#fccf9d',
  '#b5caf9',
  '#b5caf9',
  '#7eba7e',
  '#7eba7e',
  '#7eba7e',
  '#7eba7e',
];

function App() {
  const [noOfPassengers, setNoOfPassengers] = useState(0);

  const userInputHandler = (n) => {
    setNoOfPassengers(n);
  }

  var seats = []; // an array that replicates the seating arrangement

  for (let index = 0; index <= Math.floor(noOfPassengers / 10); index++) {
    seats.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  var customerNo = 1;

  for (let i = 0; i <= Math.floor(noOfPassengers / 10); i++) {
    var j = 0;

    while (j <= 9) {
      if (customerNo <= noOfPassengers) {
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

  return (
    <Fragment>
      <Card>
        <div className={classes.cardContentWrapper}>
          <Input onFormSubmit={userInputHandler}/>
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
