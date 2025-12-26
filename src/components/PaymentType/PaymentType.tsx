import {Grid} from "@mui/material";
import SelectableButton from "../../ui/SelectableButton";

const paymentTypes = [{
    id: 1,
    name: 'Банки'
}, {
    id: 2,
    name: 'Наличные'
}, {
    id: 3,
    name: 'Курьер'
}]
export const PaymentType = () => {
    const selectedId = 1;
    return <Grid container spacing={1}>
        {paymentTypes.map(item => <SelectableButton key={item.id} selected={item.id === selectedId}
                                                    text={item.name}></SelectableButton>)}
    </Grid>
}