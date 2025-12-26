import {IconButton, InputAdornment, TextField, ThemeProvider} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {currencyInput} from "../../themes/CurrencyInput";

type Props = {
    curencyLabel: string;
    value: string;
}
export const CurrencyInput = (props: Props) => {
    const digits = props.value.split('.')[1]?.length;
    const displayValue = Number(props.value).toLocaleString(undefined, {
        minimumFractionDigits: digits
    }).replace(',', '.');

    return <ThemeProvider theme={currencyInput}>
        <TextField label={props.curencyLabel}
                   variant='filled' fullWidth
                   value={displayValue}
                   slotProps={{
                       input: {
                           disableUnderline: true,
                           startAdornment:
                               <InputAdornment
                                   position='start'><IconButton><RemoveIcon/></IconButton></InputAdornment>,
                           endAdornment:
                               <InputAdornment
                                   position='end'><IconButton><AddIcon/></IconButton></InputAdornment>
                       }
                   }}/>
    </ThemeProvider>
}