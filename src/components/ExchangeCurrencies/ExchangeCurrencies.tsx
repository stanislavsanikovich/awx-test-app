import {Grid, Typography} from "@mui/material";
import CurrencyInput from "../../ui/CurrencyInput";
import classes from './ExchangeCurrencies.module.css'

export const ExchangeCurrencies = () => <Grid container spacing={1}>
    <Grid container size={{customSmall: 6}}>
        <Typography className={classes.label}>Отдаете (лот 1000)</Typography>
        <CurrencyInput curencyLabel='Etherium, ETH' value='1300.00000'/>
    </Grid>
    <Grid container size={{customSmall: 6}} sx={{justifyContent: {customSmall: 'flex-end'}}} >
        <Typography className={classes.label}>Получаете (лот 1000)</Typography>
        <CurrencyInput curencyLabel='Рубль, RUR' value='1200.00'/>
    </Grid>
</Grid>;