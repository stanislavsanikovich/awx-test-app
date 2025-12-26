import {Grid, RadioGroup, Typography} from "@mui/material";
import CustomRadioButton from "../../ui/CustomRadioButton";
import classes from './Requisite.module.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';

type Props = {
    name: string,
    radioButtons?: { id: number, name: string }[]
}
export const Requisite = (props: Props) => <Grid className={classes.card}>
    <Grid container direction='column' spacing={2}>
        {props.radioButtons ? (
            <RadioGroup row value={1}>
                {props.radioButtons.map(item => <CustomRadioButton key={item.id} label={item.name} value={item.id}/>)}
            </RadioGroup>
        ) : null}
        <Grid container justifyContent='space-between'>
            <Typography className={classes.title}>{props.name}</Typography>
            <BorderColorIcon/>
        </Grid>
    </Grid>
</Grid>