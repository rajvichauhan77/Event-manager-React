import EventList from '../pages/EventList'
import FilterEvent from '../pages/FilterEvent'
import EventDetails from '../pages/EventDetails'
import Navbar from '../components/Navbar'


  export const routes =([
    {path: '/', element: (<><Navbar /> <EventList/></>)  },
    {path: '/find-events', element:(<><Navbar /> <FilterEvent/></>)  },
    {path: '/events/:id', element: (<><Navbar /> <EventDetails/></>)  }

  ])