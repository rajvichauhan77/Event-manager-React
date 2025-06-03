// import React from "react";
// import EventCard from "./EventCard";
// import { eventList } from "../utils/EventDatabase";


// const SearchEventList = (monthYear) => {

//     const {selectedMonth, selectedYear} = monthYear

//     console.log(selectedMonth, selectedYear)

//     const filteredEvents = eventList.filter((eventDetail) => {
//         return(
//             eventDetail.date.year === selectedYear && 
//             eventDetail.date.year === selectedMonth
//         );
//     })
//     console.log(filteredEvents)

//     return(
//         <>
    
//         SearchEventList
//         </>
//     )
// }

// export default SearchEventList




import React from "react";
import EventCard from "./EventCard";
import { eventList } from "../utils/EventDatabase";

const SearchEventList = ({ selectedMonth, selectedYear }) => {
    
  console.log("Selected:", selectedMonth, selectedYear);

  const filteredEvents = eventList.filter((eventDetail) => {
    return (
      eventDetail.date.year === selectedYear &&
      eventDetail.date.month === selectedMonth
    );
  });

  console.log("Filtered:", filteredEvents);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      {filteredEvents.length === 0 ? (
        <p className="text-gray-500">No events found for the selected month and year.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchEventList;
