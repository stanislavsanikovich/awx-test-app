import {FormControlLabel, Radio} from "@mui/material";
import classes from "./CustomRadioButton.module.css";

type Props = {
    value: number;
    label: string;
}
export const CustomRadioButton = (props: Props) => <FormControlLabel value={props.value} control={<Radio className={classes.radio}
    checkedIcon={<div className={classes.selectedRadioIcon}></div>}/>} label={props.label}/>