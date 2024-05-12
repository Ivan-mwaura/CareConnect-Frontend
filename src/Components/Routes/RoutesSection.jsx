import React, { useContext } from "react";
import Dashboard from "../Main Page/Dashboard";
import { AppContext } from "../../Context/RoutesContext";
import DataCollection from "../Data collection/DataCollection";
import AddWoman from "../Addwoman/AddWoman.jsx";
import NewsEvents from "../NewsAndEvents/NewsEvents"
import Feedback from '../Feedback/Feedback.jsx'
const RoutesSection = () => {
    const { dashboardRoute } = useContext(AppContext);

    

    const handleRoute = () => {
        
        console.log(dashboardRoute)

        if(dashboardRoute === 'homepage'){
            return <Dashboard/>
        }else if(dashboardRoute === 'dataCollection'){ 
            return <DataCollection/>
        }else if(dashboardRoute === 'registerwoman'){
            return <AddWoman/>            
        }else if(dashboardRoute === 'newsandevents'){
            return <NewsEvents/>
        }else if(dashboardRoute === 'feedback'){
            return <Feedback/>
        }else{
            return <Dashboard/>
        }

        
    }

    return (
        <>
            {
                handleRoute()
                
            }
        </>
    );
}

export default RoutesSection;
