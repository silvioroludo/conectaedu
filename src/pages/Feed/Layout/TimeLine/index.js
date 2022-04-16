import React from "react";
import "./TimeLine.css"
import { FiMoreHorizontal, FiSend } from "react-icons/fi"
import { BsHeart } from 'react-icons/bs'
import { BsChat } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { BsEmojiSmile } from 'react-icons/bs'
/* import { BsHeartFill } from 'react-icons/bs' */
 
/* var likes = <BsHeart/>;

this.handleClick = this.handleClick.bind(this);

handleClick() {
    return (
        var likes = BsHeartFill
    )

} */


function TimeLine () {

/* aqui vão as funções */




return (
<>
<div className="TimeLine">
    
    <div className="containerPost">
    <IconContext.Provider value ={{size:'25px'}}>
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
        </IconContext.Provider>

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
                
                    <div className="icon1"><BsHeart/> </div>
                    <div className="icon2"> <FiSend/> </div> 
                    <div className="icon3"> <BsChat/> </div>
                
                </div>

                <div className="engagementIcons2"> 
           
                    <BsBookmark/> 
    
                </div>   
             
            </section>

            <section className="likes">
            
            <span>
                61 curtidas
            </span>

            </section>

            <div className="legendContainer">
                <p>  
                <span className="userName">Kaleo Ferreira  </span>
                Legenda da imagem dentro do feed
                </p>
            </div>

            <div className="postTime">
                <time>Há 1 hora</time>
            </div>

            <div className="coment">

                <IconContext.Provider value ={{size:'25px'}}>
                    <BsEmojiSmile className="emojiComent"/>
                </IconContext.Provider>

                 <input className="inputComent" placeholder="Adicione um comentário..."/> 

                <button className="publish">Publicar</button>
            </div>

        </IconContext.Provider>
        </footer>    
    </div>
</div>
</>

);


};

export default TimeLine;