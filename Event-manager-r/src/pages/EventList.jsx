import React from "react";
import { eventList } from "../utils/EventDatabase";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";


// import "./EventList.css"



const EventList = () => {

    const renderEventCard = () => {
      return eventList.map(({id, date, heading, location, img}) => {
            return(
                 <EventCard
                    key={id}
                    id={id}
                    date={date}
                    heading={heading}
                    location={location}
                    img={img}
                 />
            )
        })
    }


    return(
        <>
    {/* <Navbar/> */}
            <div className="border p-5">
                <div className="border p-5">
                    {eventList.length>0 ? (renderEventCard()
                     ) : <p>No events available</p>} 
                </div>
            </div>

           
          
        </>
    )
}
export default EventList