import React from "react";
import "./TimeLine.css"
import { FiMoreHorizontal, FiSend } from "react-icons/fi"
import { BsHeart } from 'react-icons/bs'
import { BsChat } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons'
 

function TimeLine () {
return (
<>
<div className="TimeLine">
    
    <div className="containerPost">
        <div className="userData">
            <div className="infosPost">
                <img className="profilePicture" 
                alt="" src={require('../../../../images/logodesign2.jpeg')} />
                <p className="userName"> Kaleo Ferreira</p>
            </div>
            <div className="postConfig">
                <FiMoreHorizontal/>
            </div>
        </div>

        <div className="postPicture">

        <img className="postPicture" 
        alt="" src={require('../../../../images/logodesign2.jpeg')} />
         </div>

        <body>

        </body>


        <footer>
        <IconContext.Provider value ={{size:'25px'}}>
            <section className="containerIcons">

                <div className="engagementIcons1">
                
                    <div> <BsHeart/> </div> 
                    <div> <FiSend/> </div> 
                    <div> <BsChat/> </div>
                
                </div>

                <div className="engagementIcons2"> 
           
                    <BsBookmark/> 
             
                </div>   
             
            </section>
        </IconContext.Provider>
        </footer>    
    </div>
</div>
</>

);


};

export default TimeLine;