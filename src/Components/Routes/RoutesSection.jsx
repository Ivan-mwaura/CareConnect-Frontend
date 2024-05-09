import React, { useContext } from "react";
import Dashboard from "../Main Page/Dashboard";
import { AppContext } from "../../Context/RoutesContext";
import DataCollection from "../Data collection/DataCollection";
import AddWoman from "../Addwoman/AddWoman.jsx";
import AddChw from "../Administrator/AddChw.jsx";
import NewsEvents from "../NewsAndEvents/NewsEvents"
const RoutesSection = () => {
    const { dashboardRoute } = useContext(AppContext);

    

    const handleRoute = () => {
        if(dashboardRoute === 'homepage'){
            return <Dashboard/>
        }else if(dashboardRoute === 'dataCollection'){ 
            return <DataCollection/>
        }else if(dashboardRoute === 'addWoman'){
            return <AddWoman/>            
        }else if(dashboardRoute === 'addChw'){
            return <AddChw/>
        }else if(dashboardRoute === 'newsandevents'){
            return <NewsEvents/>
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
