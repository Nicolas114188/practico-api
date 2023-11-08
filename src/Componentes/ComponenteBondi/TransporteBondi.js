import React from 'react';
import Select from 'react-select';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import {useState, useEffect} from "react";
import '../ComponenteBondi/TransporteBondi.css'


function TransporteBondi()
{
  let nomLinea=[];
  let varSelect=[];
  const[datosTransporte,setDatosTransporte]=useState(null);
  //const[filtroTransporte,setFiltroTransporte]=useState(null);
  useEffect(()=>{
    const interval=setInterval(()=>{
    fetch('https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=82&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
    .then(resp=>resp.json()).then(data=>{setDatosTransporte(data);}).catch(ex=>{console.error(ex);})
    }, 31000);
  return ()=> clearInterval(interval);
  },[]);
 /* useEffect(()=>{
    setFiltroTransporte(datosTransporte);
  },[]);*/

  if(datosTransporte==null)
  {
    return(<div>
      <h1>Cargando datos...</h1>
    </div>);
  }else{

    datosTransporte.forEach((item)=>{
      //ver como funciona include para tirar las lineas
        if(!nomLinea.includes(item.route_short_name)){
          nomLinea.push(item.route_short_name);
        }
    })
    nomLinea.forEach((item)=>{
      varSelect.push({"label": item, "value": item});
    })
    
    const lineasBusqueda=(event)=>{
        
        setDatosTransporte(datosTransporte.filter(e=>e.route_short_name===event.value))   
    }
    
    
    return(
      <div className='contenedorApiBondi'> 
        <MapContainer center={[-34.64657, -58.59802]} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
        datosTransporte.map((item)=>{
          const posicion=[item.latitude,item.longitude]
          return(<Marker position={posicion}>
            <Popup>
              <p>Linea {item.route_short_name}</p>
              <p>Empresa {item.agency_name}</p> 
              <p>{item.trip_headsign}</p>
              <p>Velocidad {item.speed} km/h</p>
            </Popup>
          </Marker>)
        })
        }
        
      </MapContainer>
      <Select
            options={varSelect}
            onChange={(e)=>lineasBusqueda(e)}
         />
      </div>
    );
  }
}
export default TransporteBondi;