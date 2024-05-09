import React, {useContext} from "react";
import AdministratorMainpage from "../Administrator/admistratorMainpage";
import {useSelector} from "react-redux";
import AddChw from "../Administrator/AddChw";
import ChwList from "../Administrator/ChwList";
import WomenList from "../Administrator/WomenList";



const AdminRoutesSection = () => {

    const adminRouteDisplay = useSelector((state) => state.adminRouteDisplay);

    console.log(adminRouteDisplay)
    

    const handleRouteDisplay = () => {
        switch (adminRouteDisplay) {
            case 'adminpage':
                return <AdministratorMainpage/>

            case 'addchw':
                return <AddChw/>

            case 'chwlist':
                return <ChwList/>

            case 'womenlist':
                return <WomenList/>
                
            default:
                return <AdministratorMainpage/>
        }

     }

   
    
    return(
        <div>
            
            {handleRouteDisplay()}
            
        </div>
    )

}
export default AdminRoutesSection;