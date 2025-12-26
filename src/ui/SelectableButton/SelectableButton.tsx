import {Button} from "@mui/material";
import classes from './SelectableButton.module.css';

type Props = {
    selected: boolean;
    text: string;
}
export const SelectableButton = (props: Props) => <>
    <Button className={props.selected ? classes.selected : classes.default}>{props.text}</Button>
</>

export default SelectableButton