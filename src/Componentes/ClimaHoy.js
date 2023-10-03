import React from "react";
import "./climaHoy.css";
import nublado from "../Imagenes/nublado.svg";
import precipitacion from"../Imagenes/presimitaciones.svg"
import styled from "styled-components";
import { Bar } from "react-chartjs-2";

function ClimaHoy(){
    
    return(
        <div className="contenedor">
            <div className="item-1">
                    <div className="Actualidad">
                        Actualidad
                        <img src={nublado} alt="nublado"/>
                        <p>Mayormente nublado</p>
                    </div>
                    <div className="hoy">
                        Hoy
                        <img src={precipitacion} alt="presipitacion" />
                        <p>22°</p>
                    </div>
            </div>
            <div className="item-2">
                    <div className="maxima">
                        Maxima:
                        22°
                    </div>
                    <div className="minima">
                        Minima: 
                        9°
                    </div>
            </div>
            <div className="item-3">
                Durante el día:
                <div className="dia-horizontal">
                        <p>40</p>
                        <p>30</p>
                        <p>20</p>
                        <p>0</p>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="dia-vertical">
                    <div className="barra b-1"></div>
                    <div className="barra b-2"></div>
                    <div className="barra b-3"></div>
                    <div className="barra b-4"></div>
                    <div className="barra b-5"></div>
                    <div className="barra b-6"></div>
                    <div className="barra b-7"></div>
                    <div className="barra b-8"></div>
                    <div className="barra b-9"></div>           
                </div>
                <br/>
                <hr/>
                <p>12:00 AM 3:00 AM 6:00 AM 9:00 AM 12:00 PM 3:00 PM 6:00 PM 9:00 PM 12:00AM</p>
            </div>
                <div className="item-4">
                        Datos:
                        <br/>
                        <div className="ser ser-1">
                            <p>indice UV</p>
                        </div>
                        <div className="ser ser-2">
                            <p>Velocidad del viento</p>
                        </div>
                        <div className="ser ser-3">
                            <p>Hora del sol</p>
                        </div>
                        <div className="ser ser-4">
                            <p>Humedad</p>
                        </div>
                        <div className="ser ser-5">
                            <p>Visibilidad</p>
                        </div>
                        <div className="ser ser-6">
                            <p>Calidad del aire</p>
                        </div>
                </div>             
        </div>
    );
}
export default ClimaHoy;