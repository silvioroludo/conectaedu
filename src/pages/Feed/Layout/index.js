import React from "react";
import "./layout.css";
import TimeLine from "./TimeLine"
import Noticias from "./Noticias"


function Layout () {

    return (
<>

<div className="grid-container" >

    <div className="first-column"  style={{gridArea: "firstColumn"}} >
    {<TimeLine/>}
     </div>

     <div className="second-column"  style={{gridArea: "secondColumn"}} >
     {<Noticias/>}
     </div> 

</div>

</>
    );

};

export default Layout;
