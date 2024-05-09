import React, { createContext, useState } from "react";
import AdminRoutesSection from "../Components/Routes/AdminRoutesSection";


export const AppContext = createContext();

const AdminRoutesContext = () => {

    const [adminRouteDisplay,setAdminRouteDisplay] = useState('adminpage');

    return (
        <AppContext.Provider value={{ adminRouteDisplay, setAdminRouteDisplay }}>
            <AdminRoutesSection />
        </AppContext.Provider>
    );
};

export default AdminRoutesContext;
