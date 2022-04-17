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
            alt="" src={require('../../../../images/news.jpg')} />
         </div>
    </div>

    <div className="newsText">
         <span className="newsLetter">
            Visita do Secretário da Cultura
        </span>
    </div>


            
</div>

    <div className="footerData">
       <span className="footerDataText"> Desenvolvido por: © FERREIRA DEV 2022</span>
    </div>

</>

);


};

export default Noticias;