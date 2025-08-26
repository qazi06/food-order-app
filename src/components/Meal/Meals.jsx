import { Fragment } from "react"
import AvailableMeals from "./AvailableMeals"
import SummaryMeals from "./SummaryMeals"
const Meals = () => {
    return(
        <Fragment>
            <SummaryMeals />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals