import classes from './seatsRow.module.css';

const SeatsRow = (props) => {
//   console.log(props.currentRowArray);

  return (
    <div className={classes.outer}>

      <div className={classes.innerA}>
        <div className={classes.seat} style={{backgroundColor: `${props.currentRowArray[0].color}`}}>{props.currentRowArray[0].seatNo}</div>
        <div className={classes.seat} style={{backgroundColor: `${props.currentRowArray[1].color}`}}>{props.currentRowArray[1].seatNo}</div>
        <div className={classes.seat} style={{backgroundColor: `${props.currentRowArray[2].color}`}}>{props.currentRowArray[2].seatNo}</div>
      </div>

      <div className={classes.innerB}>
        <div className={classes.seat} style={{backgroundColor: `${props.currentRowArray[3].color}`}}>{props.currentRowArray[3].seatNo}</div>
        <div className={classes.seat} style={{backgroundColor: `${props.currentRowArray[4].color}`}}>{props.currentRowArray[4].seatNo}</div>
        <div className={classes.seat} style={{backgroundColor: `${props.currentRowArray[5].color}`}}>{props.currentRowArray[5].seatNo}</div>
        <div className={classes.seat} style={{backgroundColor: `${props.currentRowArray[6].color}`}}>{props.currentRowArray[6].seatNo}</div>
      </div>

      <div className={classes.innerC}>
        <div className={classes.seat} style={{backgroundColor: `${props.currentRowArray[7].color}`}}>{props.currentRowArray[7].seatNo}</div>
        <div className={classes.seat} style={{backgroundColor: `${props.currentRowArray[8].color}`}}>{props.currentRowArray[8].seatNo}</div>
        <div className={classes.seat} style={{backgroundColor: `${props.currentRowArray[9].color}`}}>{props.currentRowArray[9].seatNo}</div>
      </div>

    </div>
  );
};

export default SeatsRow;
