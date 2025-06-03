import React, { useState } from "react";
import SearchEventList from "../components/SearchEventList";
import FilterBox from "../components/FilterBox";



const FilterEvent = () => {

    const [monthYear, setMonthYear] = useState({
        selectedMonth: null,
        selectedYear: null
    })

    const getMonthYear = ( selectedMonth,selectedYear) => {
            // console.log(selectedMonth, selectedYear)

            setMonthYear({selectedMonth, selectedYear})
    }

    return(
        <>
            <FilterBox getMonthYear={getMonthYear}/>
            <SearchEventList monthYear={monthYear}/>
        </>
    )
}
export default FilterEvent