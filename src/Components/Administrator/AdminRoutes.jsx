import React from "react";
import { Route, Routes } from "react-router-dom";
import admistratorMainpage from "./admistratorMainpage";
import AddChw from "./AddChw";

const AdminRoutes = () => {
    return(
        <>

        <Routes>
            <Route path="/" element={<admistratorMainpage/>}/>
            <Route path="/addChw" element={<AddChw/>}/>
        </Routes>


        </>
    )
}
export default AdminRoutes;