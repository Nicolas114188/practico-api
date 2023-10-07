import React from "react";
import "./climaHoy.css";
import nublado from "../Imagenes/nublado.svg";
import soliado from "../Imagenes/soliado.svg";
import precipitacion from"../Imagenes/presimitaciones.svg";
import datosClima from "./api.json";

function ClimaHoy(){
    var tiempo=[];
    for(let i=0;i<datosClima.hourly.time.length;i++)
    {
        tiempo[i]=datosClima.hourly.time[i];
    };
    var tempList=[];
    for(let i=0;i<datosClima.hourly.temperature_2m.length;i++)
    {
        tempList[i]=datosClima.hourly.temperature_2m[i];
    };  
 
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
                        <img src={soliado} alt="soliado" />
                        <p>{datosClima.current_weather.temperature} {datosClima.hourly_units.temperature_2m}</p>
                    </div>
                    <div className="dia">
                        <p>{datosClima.daily.time}</p>
                    </div>
            </div>
            <div className="item-2">
                    <div className="maxima">
                       <p>Maxima:</p>
                       <p>{datosClima.daily.temperature_2m_max} {datosClima.daily_units.temperature_2m_max}</p>
                    </div>
                    <div className="minima">
                        <p>Minima:</p> 
                        <p>{datosClima.daily.temperature_2m_min} {datosClima.daily_units.temperature_2m_min}</p>      
                    </div>
            </div>
            <div className="item-3">
                <h3>Durante el día:</h3>
                
                <div className="dia-horizontal">
                        <p>{datosClima.hourly.temperature_2m[8]}</p>
                        <p>{datosClima.hourly.temperature_2m[4]}</p>
                        <p>{datosClima.hourly.temperature_2m[23]}</p>
                        <p>0</p>
                </div>
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
                <p className="paramDia">{datosClima.hourly.time[0]} 
                                        {datosClima.hourly.time[3]}
                                        {datosClima.hourly.time[6]}
                                        {datosClima.hourly.time[9]}
                                        {datosClima.hourly.time[12]}
                                        {datosClima.hourly.time[15]}
                                        {datosClima.hourly.time[18]}
                                        {datosClima.hourly.time[21]}
                                        {datosClima.hourly.time[23]}</p>
            </div>
                <div className="item-4">
                        Datos:
                        <br/>
                        <div className="ser ser-1">
                            <p>indice UV</p>
                            <p>{datosClima.daily.uv_index_max}</p>
                        </div>
                        <div className="ser ser-2">
                            <p>Velocidad del viento</p>
                            <p>{datosClima.daily.windspeed_10m_max} {datosClima.daily_units.windspeed_10m_max}</p>
                        </div>
                        <div className="ser ser-3">
                            <p>Hora del sol</p>
                            <p>Amanacer: {datosClima.daily.sunrise}</p>
                            <p>Atardecer: {datosClima.daily.sunset}</p>
                        </div>
                        <div className="ser ser-4">
                            <p>Humedad</p>
                            <p>{datosClima.hourly.relativehumidity_2m[0]} {datosClima.hourly_units.relativehumidity_2m}</p>
                        </div>
                        <div className="ser ser-5">
                            <p>Visibilidad</p>
                            <p>{datosClima.hourly.visibility[0]} {datosClima.hourly_units.visibility}</p>
                        </div>
                        <div className="ser ser-6">
                            <p>Calidad del aire</p>
                            <p>{datosClima.hourly.european_aqi[18]} </p>
                        </div>
                </div>             
        </div>
    );
}
export default ClimaHoy;