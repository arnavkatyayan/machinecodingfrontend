import React, { useEffect } from "react";
import {useState} from "react";
import { Form,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function StopWatch() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    const handleStart=()=>{
        setIsRunning(true);
    }
    
    useEffect(() => {
        if(isRunning){
         setTimeout(() => {
            if(seconds<59){
                setSeconds(seconds+1);
            }
            else{
                setSeconds(0);
                if(minutes<59){
                    setMinutes(minutes+1);
                }
                else{
                    setMinutes(0);
                    setHours(hours+1);
                }
            } 
        }, 1000);
    }
    }, [isRunning,seconds,minutes,hours]);
  return (
    <div className="stop-watch-main">
     <div className="stop-watch-comp">
        <span>{hours.toString().padStart(2,'0')}:</span>
        <span>{minutes.toString().padStart(2,'0')}:</span>
        <span>{seconds.toString().padStart(2,'0')}</span>
     </div>
     <div className="stop-watch-btn-grp">
        <Button variant="success" onClick={()=>handleStart()}>Start</Button>
        <Button variant="danger">Stop</Button>
        <Button variant="danger">Reset</Button>
        <Button variant="success">Custom</Button>
     </div>
    </div>
  );
} export default StopWatch;