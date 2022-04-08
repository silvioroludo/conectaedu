import React from "react";
import './Feed.css';
import { ImImages } from "react-icons/im";
import { ImCamera } from "react-icons/im";
import { ImHome } from "react-icons/im";
import { ImNewspaper } from "react-icons/im";
import { ImProfile } from "react-icons/im";
import { ImBubbles4 } from "react-icons/im";
import { ImPlay } from "react-icons/im";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import  Layout  from "./Layout/index";

const Feed = () => {
    return (


<div className="container2">

<header className="menutopo">

  <div className="logopeq2">
      <Link to="/"><img className="logopeq"
     alt="" src={require('../../images/logopeq.png')} /></Link>
  </div> 


  <div className="menu2">
      
      <IconContext.Provider value ={{size:'25px'}}>
        <Link to="feed" className="menu2"> <ImHome />  </Link>
        <Link to="feed" className="menu2"> <ImProfile/>  </Link>
        <Link to="feed" className="menu2"> <ImNewspaper/> </Link>
        <Link to="feed" className="menu2"> <ImBubbles4/>  </Link>
        <Link to="feed" className="menu2"> <ImPlay/>  </Link>
      </IconContext.Provider>

      <Link to="feed" >
      <img className="perfil" alt="" src={require('../../images/logodesign2.jpeg')} />
      </Link>
          
  </div>


</header>

  <div className="image2">
    <img alt="" src={require('../../images/topground.png')} />
  </div>
    <div className="publicar">
      
      <div className="imageLoading">
        <IconContext.Provider value ={{size:'25px'}}>
          <Link to="feed" className="imageLoading1" ><ImCamera className="imageLoading1"/></Link> 
          <Link to="feed" className="imageLoading2"><ImImages className="imageLoading2"/></Link>
        </IconContext.Provider>
      </div> 

      <div className="inputImage">
        <input className="input2" placeholder="Compartilhe conhecimento!"/>
      <div/>
    </div>

  </div>
  <Layout/>
</div>



    );

};

export default Feed;
