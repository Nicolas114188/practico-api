import React from "react";
import "./climaHoy.css"
import duranteDia from "../Imagenes/Barra de clima del dia.jpg"

function ClimaHoy(){
    return(
        <body>
            <h2>Hoy</h2>
                <body className="actual">
                    <img src="https://www.smn.gob.ar/sites/all/themes/smn/img/weather-icons/43.png" />
                    <p>17°</p>
                </body>
                <body className="completo">
                <body className="item-1">
                    <h3>Mañana</h3>
                    <img src="https://www.smn.gob.ar/sites/all/themes/smn/img/weather-icons/37.png"/>
                    <p>Mayormente nublado</p>
                </body>
                <body className="item-2">
                    <h3>Durante el dia</h3>
                    <img src={duranteDia} alt="durante Dia"/>
                    <p>Mayormente nublado</p>
                </body>
                </body>
        </body>
    );
}
export default ClimaHoy;