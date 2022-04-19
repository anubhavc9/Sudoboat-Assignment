import classes from './columnHeading.module.css';

const ColumnHeading = () => {
    return (
        <div className={classes.colWrapper}>
            <div className={classes.colA}>
                Column A
            </div>
            <div className={classes.colB}>
                Column B
            </div>
            <div className={classes.colC}>
                Column C
            </div>
        </div>
    );
}

export default ColumnHeading;