import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet'
import {useRef,useState, useEffect} from "react";
import datosTransporte from "./BondiPrueba.json"


function TransporteBondi()
{
  const form=useRef();
  let nomLinea=[];
  let busquedaLinea;
  /*const[datosTransporte,setDatosTransporte]=useState(null);
  useEffect(()=>{
    const interval=setInterval(()=>{
    fetch('https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=82&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
    .then(resp=>resp.json()).then(data=>{setDatosTransporte(data);}).catch(ex=>{console.error(ex);})
    }, 31000);
  return ()=> clearInterval(interval);
  },[]);*/
  /*
    useEffect(() => {
    const interval = setInterval(() => {
      codigo que se cargue cada 31seg=31000
    }, 31000);
    return () => clearInterval(interval);
  }, []);
  */
  
  if(datosTransporte==null)
  {
    return(<div>
      <h1>Cargando datos...</h1>
    </div>)
  }else{
    datosTransporte.forEach((item)=>{
      if(!nomLinea.includes(item.route_short_name))
      {
        nomLinea.push(item.route_short_name);
      }
    })
    const lineasBusqueda=({value})=>{
         datosTransporte=datosTransporte.filter(e=>e.route_short_name==value)
    }
    return(
      <div>
        <form ref={form}>
          <select name='Seleccion'  onChange={(e)=>lineasBusqueda(e.target.value)}>
            {nomLinea.map((linea)=>{
              return(<option value={linea}>{linea}</option>)
            })}
          </select>
        </form>
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
      </div>
    );
  }
}
export default TransporteBondi;