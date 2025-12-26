import {
    Button,
    styled,
    TextField,
    inputLabelClasses,
    Checkbox,
    FormControlLabel,
    Radio,
    RadioGroup, InputAdornment, IconButton, Input
} from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import classes from './SelectableButton.module.css'

type Props = {
    selected: boolean;
    text: string;
}
export const SelectableButton = (props: Props) => <>
    <Button className={props.selected ? classes.selected : classes.default}>{props.text}</Button>
</>

export default SelectableButton