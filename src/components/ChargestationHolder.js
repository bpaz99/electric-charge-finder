import React, { useState, useEffect } from 'react';
import {Route} from "react-router-dom";
import axios from "axios";
import Chargestation from "./Chargestation"
import StationsMap from "./Map"
import ViewSelector from "./ViewSelector"


/**
 * Get current lattitude and longitude
 * 
 * Make an API call with that lat and long
 * 
 * Set up standard options (distance:10) (unit:miles) (Kw) (...)
 * 
 * Map / foreach trough all the api response and display that in here - Make it beutiful material UI maybe bro
 * 
 * MVP up to here - enough to make the V0.1
 * 
 * For v0.2
 * 
 * Add user input for options
 * 
 * For v0.3 Work with the google maps api and put those things into map with options to call the GPS directions
 * 
 * Up to here we are good to launch v1.0
 * 
 * //Future implementations
 * Profile 
 * Favourite list
 * Plan trips
 * 
 */



function ChargestationHolder() {
    
    const [pos, setPos] = useState({});
    const [data,setData] = useState([]);
    const [options, setOptions]=useState({
        distance:"10",
        maxresults:"25",
        distanceUnit:"km" //km for duh
    });
    
    function success(location){
        setPos(location.coords);
    } 

    navigator.geolocation.getCurrentPosition(success);

    useEffect(()=>{
        axios.get(`https://api.openchargemap.io/v3/poi/?output=json&compact=true&verbose=false&maxresults=${options.maxresults}&latitude=${pos.latitude}&longitude=${pos.longitude}&distance=${options.distance}&distanceunit=${options.distanceUnit}`).then(res => {
            setData(res.data);   
        })
    },[options,pos])
   
    return (
        <div>
            <ViewSelector></ViewSelector>
            <Route exact path="/">
            <div className="charge-stn-holder">
                {data.map(e => {
                    return <Chargestation key={e.UUID} data={e} distanceUnit={options.distanceUnit}></Chargestation>
                })}
            </div>
            </Route>            
            <Route exact path="/map">
            <StationsMap data={data} lat={pos.latitude} lng={pos.longitude}></StationsMap>
            </Route>
        </div>

    );
}





export default ChargestationHolder;


