import React from "react";
import "./layout.css";
import TimeLine from "./TimeLine"
import Noticias from "./Noticias"


function Layout () {

    return (
<>



<div className="maingrid">

    <div className="first-column" style={{gridArea: "firstColumn"}}>
       <div className="feedFinal">
           {<TimeLine/>}
        </div>
     </div>

     <div className="second-column" style={{gridArea: "secondColumn"}}>
        <div className="noticias">
            {<Noticias/>}
        </div>
     </div> 

</div>

</>
    );

};


export default Layout;
