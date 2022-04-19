import { Fragment } from "react";
import SeatsRow from "./components/seatsRow";

const n = 27; // take this as user input
var sequence = [1, 4, 5, 8, 0, 9, 2, 3, 6, 7];
var color = [
  "orange",
  "orange",
  "orange",
  "orange",
  "blue",
  "blue",
  "green",
  "green",
  "green",
  "green",
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
      {seats.map((seatsRow, index) => (
        <SeatsRow key={index} currentRowArray={seatsRow} />
      ))}
    </Fragment>
  );
}

export default App;
