import React, { createContext, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import RoutesSection from "../Components/Routes/RoutesSection";



export const AppContext = createContext();

const RoutesContext = () => {  
    const [dashboardRoute, setDashboardRoute] = useState("homepage");
    const [adminRouteDisplay,setAdminRouteDisplay] = useState('adminpage');

    console.log(dashboardRoute)
    

    return (
        <AppContext.Provider value={{ dashboardRoute,setDashboardRoute, adminRouteDisplay, setAdminRouteDisplay }}>
            <Sidebar />
            <RoutesSection/>
        </AppContext.Provider>
    );
}

export default RoutesContext;
