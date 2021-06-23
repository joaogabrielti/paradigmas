import {addDays} from 'date-fns'

const adapterDate = (date, days) => {
    return addDays(new Date(date), days)
}

export {
    adapterDate
}