import React from "react";
import './ImagePopup.css';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
/* import { ImImages } from "react-icons/im";
import { ImCamera } from "react-icons/im";
import {IconContext} from "react-icons";
import { Link } from "react-router-dom";
 */
function CameraPopUp(props) {
return ( props.trigger) ? (

<div className="containerPopUp">

    <div className="popUp">

    <Link to="/" className="menu2"> <button className="closePopUp" onClick={() => props.setTrigger(false)}><AiOutlineClose/></button> </Link>
        
        {props.children}     


    {/*     <div className="containerPublicar">
            <div className="imageIcons">
            <IconContext.Provider value ={{size:'25px'}}>
                <div>
                <Link to="feed" className="imageLoading11" ><ImCamera className="imageLoading1"/></Link> 
                </div>
                <div>
                <Link to="feed" className="imageLoading22"><ImImages className="imageLoading2"/></Link>
                </div>            
            </IconContext.Provider>
            </div> 

            <div className="imagesInput">
                <input className="input22" placeholder="Compartilhe conhecimento!"/> 
            </div>
        </div>  */}
    </div>

</div>
) : "";

}

export default CameraPopUp;