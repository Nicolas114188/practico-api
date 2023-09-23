import React from "react";
import "./climaHoy.css"
import duranteDia from "../Imagenes/Barra de clima del dia.jpg"

function ClimaHoy(){
    return(
        <body className="contenedor">
                <div className="durante Dia">
                    <h3>Durante el dia</h3>
                    <img src={duranteDia} alt="durante Dia"/>
                </div>
                
                <div className="completo">
                    <div className="item-1">
                        <h3>Mañana</h3>
                        <img src="https://www.smn.gob.ar/sites/all/themes/smn/img/weather-icons/37.png"/>
                        <p>Mayormente nublado</p>
                    </div>
                    <div className="aitem-2">
                        <h3>Hoy</h3>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
                        <p>21°</p>
                    </div>
                </div>
        </body>
    );
}
export default ClimaHoy;