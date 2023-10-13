import React from "react";
import "./climaHoy.css";
import nublado from "../Imagenes/nublado.svg";
import soliado from "../Imagenes/soliado.svg";
import precipitacion from"../Imagenes/presimitaciones.svg";
import datosClima from "./api.json";
import {useState, useEffect} from "react";
//https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo
function ClimaHoy(){
    const [datostiempo, setdatostiempo] =useState(null);
    const[cargando,setcargardo]=useState(false);
    /*var tiempo=[];
    for(let i=0;i<datosClima.hourly.time.length;i++)
    {
        tiempo[i]=datosClima.hourly.time[i];
    };
    var tempList=[];*/
    /*for(let i=0;i<datosClima.hourly.temperature_2m.length;i++)
    {
        tempList[i]=datosClima.hourly.temperature_2m[i];
    };  */
    useEffect(()=>{
        fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo')
        .then(resp=>resp.json()).then(data=>{
            setdatostiempo(data);
            //console.log(data);
        }).catch(ex =>{console.error(ex);})
    },[])
    //console.log(datostiempo);
    if(datostiempo==null)
    {
        return(
            <div>
                <h1>Cargando datos...</h1>
            </div>
        );
    }else
    {

    return(
        <div className="contenedor">
            <div className="item-1">
                    <div className="Actualidad">
                        Actualidad
                        <img src={soliado} alt="soliado"/>
                        <p>Soleado</p>
                    </div>
                    <div className="hoy">
                        Hoy
                        <img src={soliado} alt="soliado" />
                        <p>{datostiempo.current.temperature_2m} {datostiempo.hourly_units.temperature_2m}</p>
                    </div>
                    <div className="dia">
                        <p>{datostiempo.daily.time[0]}</p>
                    </div>
            </div>
            <div className="item-2">
                    <div className="maxima">
                       <p>Maxima:</p>
                       <p>{datostiempo.daily.temperature_2m_max[0]} {datostiempo.daily_units.temperature_2m_max}</p>
                    </div>
                    <div className="minima">
                        <p>Minima:</p> 
                        <p>{datostiempo.daily.temperature_2m_min[0]} {datostiempo.daily_units.temperature_2m_min}</p>      
                    </div>
            </div>
            <div className="item-3">
                <h3>Durante el día:</h3>
                
                <div className="dia-horizontal">
                        <p>{datostiempo.hourly.temperature_2m[16]}</p>
                        <p>{datostiempo.hourly.temperature_2m[11]}</p>
                        <p>{datostiempo.hourly.temperature_2m[7]}</p>
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
                <p className="paramDia">{datostiempo.hourly.time[0]} 
                                        {datostiempo.hourly.time[3]}
                                        {datostiempo.hourly.time[6]}
                                        {datostiempo.hourly.time[9]}
                                        {datostiempo.hourly.time[12]}
                                        {datostiempo.hourly.time[15]}
                                        {datostiempo.hourly.time[18]}
                                        {datostiempo.hourly.time[21]}
                                        {datostiempo.hourly.time[23]}</p>
            </div>
                <div className="item-4">
                        Datos:
                        <br/>
                        <div className="ser ser-1">
                            <p>indice UV</p>
                            <p>{datostiempo.daily.uv_index_max[0]}</p>
                        </div>
                        <div className="ser ser-2">
                            <p>Velocidad del viento</p>
                            <p>{datostiempo.current.windspeed_10m} {datostiempo.current_units.windspeed_10m}</p>
                        </div>
                        <div className="ser ser-3">
                            <p>Hora del sol</p>
                            <p>Amanacer: {datostiempo.daily.sunrise[0]}</p>
                            <p>Atardecer: {datostiempo.daily.sunset[0]}</p>
                        </div>
                        <div className="ser ser-4">
                            <p>Humedad</p>
                            <p>{datostiempo.current.relativehumidity_2m} {datostiempo.current_units.relativehumidity_2m}</p>
                        </div>
                        <div className="ser ser-5">
                            <p>Visibilidad</p>
                            <p>{datostiempo.hourly.visibility[0]} {datostiempo.hourly_units.visibility}</p>
                        </div>
                        <div className="ser ser-6">
                            <p>Calidad del aire</p>
                            <p>{datosClima.hourly.european_aqi[18]} </p>
                        </div>
                </div>             
        </div>
    );
    }
}
export default ClimaHoy;