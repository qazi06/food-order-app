import { Fragment } from "react"
import AvailableMeals from "./AvailableMeals"
import SummaryMeals from "./SummaryMeals"
const Meals = () => {
    return(
        <Fragment>
            <AvailableMeals />
            <SummaryMeals />
        </Fragment>
    )
}

export default Meals