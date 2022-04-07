import React from "react";
import './styles.css';
import { ImImages } from "react-icons/im";
import { ImCamera } from "react-icons/im";
import { ImHome } from "react-icons/im";
import { ImNewspaper } from "react-icons/im";
import { ImProfile } from "react-icons/im";
import { ImBubbles4 } from "react-icons/im";
import { ImPlay } from "react-icons/im";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons"

const Feed = ({black}) => {
    return (

<div className="container2">



<header className="menutopo">
         

          <div>
          <Link to="/"><img className="logopeq"
          alt="" src={require('./logopeq.png')} /></Link>
          </div> 

  

        <div className="menu2">
              <IconContext.Provider value ={{size:'30px'}}>
                <Link to="feed" className="menu2"> <ImHome />  </Link>
                <Link to="feed" className="menu2"> <ImProfile/>  </Link>
                <Link to="feed" className="menu2"> <ImNewspaper/> </Link>
                <Link to="feed" className="menu2"> <ImBubbles4/>  </Link>
                <Link to="feed" className="menu2"> <ImPlay/>  </Link>
         
              </IconContext.Provider>

              <Link to="feed" >
              <img className="perfil" alt="" src={require('./logodesign2.jpeg')} />
              </Link>
        </div>


</header>

<     div className="containerinput2">
        <ImImages className="imageLoading"/>  
        <ImCamera className="imageLoading"/> 
        <input className="input2" placeholder="Publique suas aulas!"/>
      <div/>


  <div className="image2">
    <img alt="Mulher e logo" src={require('./topground.png')} />
  </div>



    <div className="timeline2">
        <div className="timelinewhite"> Olá Mundo </div>
    </div>
  </div>

</div>

    );

};

export default Feed;
