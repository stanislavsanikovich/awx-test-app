import {Checkbox, FormControlLabel, Grid, Typography} from "@mui/material";
import classes from './PaymentPage.module.css'
import PaymentType from "../../components/PaymentType";
import Exchange from "../../components/ExchangeCurrencies";
import Requisites from "../../components/Requisites";

export const PaymentPage = () => <Grid container direction='column' spacing={2}>
    <Typography className={classes.typographyTitle}>Способ вывода</Typography>
    <PaymentType/>
    <Typography className={classes.typographyTitle}>Объемы</Typography>
    <Exchange/>
    <Grid container justifyContent='space-between'>
        <Typography className={classes.typographyTitle}>Реквизиты</Typography>
        <FormControlLabel control={<Checkbox defaultChecked/>}
                          label={<Typography className={classes.label}>Сохранить реквизиты</Typography>}
                          labelPlacement='start'/>
    </Grid>
    <Requisites/>
</Grid>

// export default PaymentPage;