import Requisite from "../Requisite";

const requisitesList = [{
    id: 1,
    name: 'Номер карты',
    radioButtons: [{
        id: 1,
        name: 'Номер карты'
    }, {
        id: 2,
        name: 'Номер договора'
    }]
}, {
    id: 2,
    name: 'Фио владельца'
}, {
    id: 3,
    name: 'Адрес'
}];

export const Requisites = () => <>
    {
        requisitesList.map(item => <Requisite key={item.id} name={item.name} radioButtons={item.radioButtons}/>)
    }
</>