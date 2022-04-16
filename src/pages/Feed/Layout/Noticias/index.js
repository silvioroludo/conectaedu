import React from "react";
import "./Noticias.css"


function Noticias () {
return (
<>
<div className="Noticias">

    <h1> Notícias </h1>

        <div className="newsData">
            <div className="newsPicture">
                <img className="newsPicture" 
            alt="" src={require('../../../../images/logodesign2.jpeg')} />
            </div>
        </div>

        <div className="newsText">
                <p className="newsLetter"> Visita do Secretário
             da Cultura</p>
            </div>
            
</div>

</>

);


};

export default Noticias;