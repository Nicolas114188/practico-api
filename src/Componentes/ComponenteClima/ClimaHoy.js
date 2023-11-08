import React from "react";
import "./climaHoy.css";
import imagenes from "./imagenes";
import ciudadClima from "./ciudadClima.json";
import {useState, useEffect} from "react";
import Select from "react-select";

function ClimaHoy(){
    const [datostiempo, setDatostiempo] =useState(null);
    const [calidadAire, setCalidadAire]=useState(null);
    const [ciudad, setCiudad]=useState(ciudadClima[0]);
    let pronostico="";
    let imgPronostico="";
    let numLluvia=0;
    let horaClima=[];
    // Este useEffect permite traer datos del clima desde la Api y es convertido en formato json "objecto"
    useEffect(()=>{
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${ciudad.latitude}&longitude=${ciudad.longitude}&current=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,cloudcover,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,rain,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo`)
        .then(resp=>resp.json()).then(data=>{
            setDatostiempo(data);
            
        }).catch(ex =>{console.error(ex);})
    },[ciudad])

    useEffect(()=>{
        fetch('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&current=european_aqi&hourly=european_aqi&timezone=America%2FSao_Paulo')
        .then(resp=>resp.json()).then(data=>{
            setCalidadAire(data);
        }).catch(ex=>{console(ex);})
    },[])
    // Consultamos si variable datostiempo, calidadAire es null si lo es mostramos un mensaje que se esta cargando los dato hasta que la 
    //api devuelva objecto
    if(datostiempo==null||calidadAire==null)
    {
        return(
            <div>
                <h1>Cargando datos...</h1>
            </div>
        );
    }else
    {
        //crear lista hora promedio de clima
        for(let i=0;i<24;i=i+3)
        {
            horaClima.push(datostiempo.hourly.time[i].slice(11))
        }
        horaClima.push(datostiempo.hourly.time[23].slice(11))
        
        // Se pregunta si como es el pronostico con if  else
        if(datostiempo.current.cloudcover>0)
             {

                 if(datostiempo.current.precipitation>0)
                {
                    for(let i=0;i<datostiempo.hourly.rain.length;i++)
                    {
                         numLluvia=numLluvia+datostiempo.hourly.rain[i];
                    }
                    if(numLluvia>0)
                    {
                        pronostico="lluvia";
                        imgPronostico=imagenes.lluvia;
                    }else{
                        pronostico="precipitaciones";
                        imgPronostico=imagenes.precipitaciones;
                    }
                
                }else{
                    pronostico="nublado";
                    imgPronostico=imagenes.nublado;
                }
            
             }else
             {
                pronostico="soliado";
                imgPronostico=imagenes.soliado;
             }

             const selecEleccion=(event)=>{
                setCiudad(ciudadClima[event.value-1]);
             }
             console.log(ciudad.label);
      // retorna los datos desde api pronostico del clima             
    return(
        <div className="contenedor">
            <div className="item-1">
                    <div className="seleccionProvincia">
                        <Select
                            defaultValue={ciudadClima[0]}
                            options={ciudadClima.map(elemento=>({label: elemento.label, value: elemento.value}))}
                            onChange={selecEleccion}
                        />
                    </div>
                    <div className="Actualidad">
                        Actualidad
                        <img src={imgPronostico} alt={pronostico}/>
                        <p>{pronostico}</p>
                    </div>
                    <div className="hoy">
                        Hoy
                        <img src={imgPronostico} alt={pronostico} />
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
                {/* temperatura durante el día maxima y minima */}
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
                {/* temperatura estimada durante el día */}
                <div className="dia-vertical">
                    <div className="barra b-1" style={{height:datostiempo.hourly.temperature_2m[0]}}></div>
                    <div className="barra b-2" style={{height:datostiempo.hourly.temperature_2m[3]}}></div>
                    <div className="barra b-3" style={{height:datostiempo.hourly.temperature_2m[6]}}></div>
                    <div className="barra b-4" style={{height:datostiempo.hourly.temperature_2m[9]}}></div>
                    <div className="barra b-5" style={{height:datostiempo.hourly.temperature_2m[12]}}></div>
                    <div className="barra b-6" style={{height:datostiempo.hourly.temperature_2m[15]}}></div>
                    <div className="barra b-7" style={{height:datostiempo.hourly.temperature_2m[18]}}></div>
                    <div className="barra b-8" style={{height:datostiempo.hourly.temperature_2m[21]}}></div>
                    <div className="barra b-9" style={{height:datostiempo.hourly.temperature_2m[23]}}></div>           
                </div>
                <br/>
                <hr/>
                {/* hora estimada durante el día */}
                {horaClima.map((elemento)=>{
                    return(<strong>{elemento+" "}</strong>)
                })}
                
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
                            <p>Amanacer: {datostiempo.daily.sunrise[0].slice(11)}</p>
                            <p>Atardecer: {datostiempo.daily.sunset[0].slice(11)}</p>
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
                            <p>{calidadAire.current.european_aqi} </p>
                        </div>
                </div> 
            {/*<div className="item-5">
            <Select/>
            </div>*/}                
        </div>
    );
    }
}
export default ClimaHoy;