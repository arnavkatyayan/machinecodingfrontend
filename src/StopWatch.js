import React, { useEffect } from "react";
import {useState} from "react";
import { Form,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function StopWatch() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isCustom, setIsCustom] = useState(false);
    const [isReverseCountdown, setIsReverseCountdown] = useState(false);
    const [isHide,setIsHide] = useState(false);
    const handleStart=()=>{
        setIsRunning(true);
    }

    const handleStop=()=> {
        setIsRunning(false);
    }

    const handleReset=()=>{
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    const handleCustomTime=()=>{
        setIsRunning(true);
        setIsCustom(false);
        //setIsReverseCountdown(true);
    }

    const handleCustomReset=()=>{
       // setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
      //  setIsCustom(false);
    }

    const handleCustom=()=>{
        setIsCustom(!isCustom);
        setIsRunning(false);
    }

    const handleCustomCancel=()=>{  
        setIsCustom(false);
         setIsRunning(true);
         setIsReverseCountdown(false);
        // setSeconds(0);
        // setMinutes(0);
        // setHours(0);
    }
    // const handleCustomHide=()=>{
    //     setIsCustom(false);
    // }
    useEffect(() => {
        let timer;

        if (isRunning && !isReverseCountdown) {
            timer = setTimeout(() => {
                if (seconds < 59) {
                    setSeconds(seconds + 1);
                } else {
                    setSeconds(0);
                    if (minutes < 59) {
                        setMinutes(minutes + 1);
                    } else {
                        setMinutes(0);
                        setHours(hours + 1);
                    }
                }
            }, 1000);
        }

        if (isRunning && isReverseCountdown) {
            timer = setTimeout(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else {
                    setSeconds(59);
                    if (minutes > 0) {
                        setMinutes(minutes - 1);
                    } else {
                        setMinutes(59);
                        setHours(hours - 1);
                    }
                }
            }, 1000);
        }

        return () => clearTimeout(timer);

    }, [isRunning, seconds, minutes, hours, isCustom]);
  return (
    <div className="stop-watch-main">
        <div className="stop-watch">
     <div className="stop-watch-comp">
        <span>{hours.toString().padStart(2,'0')}:</span>
        <span>{minutes.toString().padStart(2,'0')}:</span>
        <span>{seconds.toString().padStart(2,'0')}</span>
     </div>
     <div className="stop-watch-btn-grp">
        <Button variant="success" onClick={()=>handleStart()}>Start</Button>
        <Button variant="danger" onClick={()=>handleStop()}>Stop</Button>
        <Button variant="danger" onClick={()=>handleReset()}>Reset</Button>
        <Button variant="success" onClick={()=>handleCustom()}>{isCustom ? "Hide" : "Custom"}</Button>
    </div>
          {isCustom ?
              <div className="custom-time-input-grp">
                  <Form.Control
                      type="number"
                      placeholder="Enter time in hours"
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="custom-time-input"

                  />
                   <Form.Control
                      type="number"
                      placeholder="Enter time in minutes"
                      value={minutes}
                      onChange={(e) => setMinutes(Number(e.target.value))}
                      className="custom-time-input"

                  />
                   <Form.Control
                      type="number"
                      placeholder="Enter time in seconds"
                      value={seconds}
                      onChange={(e) => setSeconds(Number(e.target.value))}
                      className="custom-time-input"

                  />
                  <Form.Check 
                        type="checkbox"
                        label="Reverse Countdown"
                        value={isReverseCountdown}
                        onChange={(e) => setIsReverseCountdown(e.target.checked)}/>
                  <div className="custom-time-btn-grp">
                  <Button variant="success" onClick={()=>handleCustomTime()}>Set Time</Button>
                  <Button variant="danger" onClick={()=>handleCustomReset()}>Reset</Button>
                  <Button variant="danger" onClick={()=>handleCustomCancel()}>Cancel</Button>
                  {/* <Button variant="success" onClick={()=>handleCustomHide()}>Hide</Button> */}
                    </div>
              </div>
              : null
          }
    </div>
    </div>
  );
} export default StopWatch;