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
                        <h3>Actualidad</h3>
                        <img src="https://www.smn.gob.ar/sites/all/themes/smn/img/weather-icons/37.png"/>
                        <p>Mayormente nublado</p>
                    </div>
                    <div className="item-2">
                        <h3>Hoy</h3>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
                        <p>21°</p>
                    </div>
                </div>
                <div className="servicio">
                        <h3>Datos:</h3>
                        <br/>
                        <div className="item ser-1">
                            <p>indice UV</p>
                        </div>
                        <div className="item ser-2">
                            <p>Velocidad del viento</p>
                        </div>
                        <div className="item ser-3">
                            <p>Hora del sol</p>
                        </div>
                        <div className="item ser-4">
                            <p>Humedad</p>
                        </div>
                        <div className="item ser-5">
                            <p>Visibilidad</p>
                        </div>
                        <div className="item ser-6">
                            <p>Calidad del aire</p>
                        </div>
                </div>
        </body>
    );
}
export default ClimaHoy;