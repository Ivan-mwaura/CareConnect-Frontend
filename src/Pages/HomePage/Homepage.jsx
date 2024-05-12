import React from "react";

import Navbar from "../../Components/Navbar/Navbar";

import RoutesContext  from '../../Context/RoutesContext';



const Homepage = () => {
    return (
        <div>           
          <Navbar/>
          <RoutesContext/>  
          

      </div>
           )
}
export default Homepage;