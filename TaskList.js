import React, { useRef, useState } from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";

const TaskList = ({ tasks, delTask }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({ mm: 0, ss: 0, ms: 0 });

  const timerRef = useRef(null);

  // const startTimer = () => {
  //   setIsRunning(prevIsRunning => {
  //     if (prevIsRunning) {
  //       clearInterval(timerRef.current);
  //     } else {
  //       timerRef.current = setInterval(() => {
  //         setTime(prevTime => {
  //           let { mm, ss, ms } = prevTime;
  //           ms++;
  //           if (ms >= 100) {
  //             ss++;
  //             ms = 0;
  //           }
  //           if (ss >= 60) {
  //             mm++;
  //             ss = 0;
  //           }
  //           return { ...prevTime, mm, ss, ms };
  //         });
  //       }, 10);
  //     }
  //     return !prevIsRunning;
  //   });
  // };


  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime(prevTime => {
        let { mm, ss, ms } = prevTime;
        ms++;
        if (ms >= 100) {
          ss++;
          ms = 0;
        }
        if (ss >= 60) {
          mm++;
          ss = 0;
        }
        return { ...prevTime, mm, ss, ms };
      });
    }, 10);
  };

  const stopTimer = () => {
    console.log("stopping")
    clearInterval(timerRef.current);
  };


  const startClickHandler = () => {
    if (!isRunning) {
      console.log("start",startTimer());
      startTimer();
      setIsRunning(true);
    }
  };


  const stopClickHandler = () => {
    if (isRunning) {
      console.log("stop",stopTimer(),timerRef.current,format(time.mm));
      stopTimer();
      setIsRunning(false);
    }
  };


  // Function to format time to display as two digits
  const format = num => {
    return num.toString().padStart(2, '0');
  };



  return (
    <div className="container">
      <h4 style={{ textAlign: "center" }}>Task List</h4>
      <Collapsible accordion={false}>
        {tasks.map((task) => {
          const { key, newTask, details } = task;
          return (
            
            <CollapsibleItem id={key} key={key} header={newTask}>
              {/* <div>Task compeleted Duration:{counterSecond}</div> */}
              {details}
              <span>{format(time.mm)}</span>:
<span>{format(time.ss)}</span>:
<span>{format(time.ms)}</span>
{/* <div>
<span>{format(time.mm)}</span>:
<span>{format(time.ss)}</span>:
<span>{format(time.ms)}</span>
<button className="control" onClick={startClickHandler} disabled={isRunning}>
        Start
      </button>
      <button className="control" onClick={stopClickHandler} disabled={!isRunning}>
        Stop
      </button>
</div>             <button 
                id={key}
                // onClick={onDelete}
                className="btn waves-effect lime accent-2 black-text waves-dark"
              >
                Delete
              </button> */}  
              <button
                id={key}
                onClick={startClickHandler}
                disabled={isRunning}
                className="btn waves-effect lime accent-2 black-text waves-dark"
              >
                start
              </button>

               <button 
                id={key}
                onClick={stopClickHandler}
                disabled={!isRunning}
                className="btn waves-effect lime accent-2 black-text waves-dark"
              >
                Submit
              </button>
              {/* <div>Start:{counterSecond}</div>
              <div>Stop:{counter}</div> */}

            </CollapsibleItem>
           );
         })}
       </Collapsible>
     </div>
   );
 };
 export default TaskList;



// import React, { useState, useRef } from 'react';
// // import './StopWatch.css';

// const StopWatch = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [time, setTime] = useState({ mm: 0, ss: 0, ms: 0 });

//   const timerRef = useRef(null);

  // const startTimer = () => {
  //   timerRef.current = setInterval(() => {
  //     setTime(prevTime => {
  //       let { mm, ss, ms } = prevTime;
  //       ms++;
  //       if (ms >= 100) {
  //         ss++;
  //         ms = 0;
  //       }
  //       if (ss >= 60) {
  //         mm++;
  //         ss = 0;
  //       }
  //       return { ...prevTime, mm, ss, ms };
  //     });
  //   }, 10);
  // };

  // const stopTimer = () => {
  //   clearInterval(timerRef.current);
  // };

//   const startClickHandler = () => {
//     if (!isRunning) {
//       startTimer();
//       setIsRunning(true);
//     }
//   };

  // const stopClickHandler = () => {
  //   if (isRunning) {
  //     stopTimer();
  //     setIsRunning(false);
  //   }
  // };

//   // Function to format time to display as two digits
//   const format = num => {
//     return num.toString().padStart(2, '0');
//   };

//   return (
//     <div className="stop-watch">
//       <div>
//         <span>{format(time.mm)}</span>:
//         <span>{format(time.ss)}</span>:
//         <span>{format(time.ms)}</span>
//       </div>
//       <button className="control" onClick={startClickHandler} disabled={isRunning}>
//         Start
//       </button>
//       <button className="control" onClick={stopClickHandler} disabled={!isRunning}>
//         Stop
//       </button>
//     </div>
//   );
// };

// export default StopWatch;
