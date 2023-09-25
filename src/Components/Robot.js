import { useEffect, useState } from "react"

const numberJoints = 6
const armLength = 5;
const jointSize = 1;
const tolerance = 1e-3;
const basePosition = {  x: 0, 
                        y: 25};


function norm(pos1, pos2){

    return Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y- pos1.y, 2));
}

function forwardKinematics (conf) {
    
    const jntCoordinates = Array(numberJoints + 1).fill(null).map( () => ({...basePosition}) );

    for (let idx = 1; idx <= conf.length; ++idx){
        jntCoordinates[idx].x = jntCoordinates[idx - 1].x + armLength * Math.cos(conf[idx - 1])
        jntCoordinates[idx].y = jntCoordinates[idx - 1].y + armLength * Math.sin(conf[idx - 1])
    }

    return jntCoordinates;

}

function fk (jntCoord){

    let robotDrawing = []

    for (let idxJnt = 0; idxJnt < jntCoord.length - 1; ++idxJnt){
        robotDrawing.push(<line key={'link-' + idxJnt} x1={jntCoord[idxJnt].x} y1={jntCoord[idxJnt].y} x2={jntCoord[idxJnt + 1].x} y2={jntCoord[idxJnt + 1].y} stroke="red" />);
        robotDrawing.push(<circle key={'jnt-' + idxJnt} cx={jntCoord[idxJnt].x} cy={jntCoord[idxJnt].y} r={jointSize} fill="#f36464" />);
    }

    return robotDrawing;
}


function inverseKinematics (jntCoordinates, eePosition) {

    const computeVersor = (pos1, pos2) =>{
        const vecNorm = norm(pos1, pos2);
        return {x: (pos2.x - pos1.x) / vecNorm,
                y: (pos2.y - pos1.y) / vecNorm}
    }

    const backwards = (jntCoord) => {

        // Set eePosition as last position of the link
        jntCoord[jntCoordinates.length - 1] = eePosition;

        // Set second to last joint fix
        jntCoord[jntCoordinates.length - 2].x = eePosition.x - armLength;
        jntCoord[jntCoordinates.length - 2].y = eePosition.y;

        for (let idxJnt = jntCoord.length - 2; idxJnt > 0; --idxJnt){
            const versor = computeVersor(jntCoord[idxJnt], jntCoord[idxJnt - 1]);

            const newCoordinate = { x: jntCoord[idxJnt].x + versor.x * armLength,
                                    y: jntCoord[idxJnt].y + versor.y * armLength}
         
            jntCoord[idxJnt - 1] = newCoordinate;

        }

        return jntCoord;

    }

    const forwards = (jntCoord) => {
        // Set basePosition as last position of first link
        jntCoord[0] = basePosition;

        for (let idxJnt = 0; idxJnt < jntCoord.length - 1; ++idxJnt){
            const versor = computeVersor(jntCoord[idxJnt], jntCoord[idxJnt + 1]);
            
            const newCoordinate = { x: jntCoord[idxJnt].x + versor.x * armLength,
                                    y: jntCoord[idxJnt].y + versor.y * armLength}

            jntCoord[idxJnt + 1] = newCoordinate;
        }

        return jntCoord;
    }

    const ik = (jntCoord, eePosition) => {
        
        let dist = norm(jntCoord[jntCoord.length - 1], eePosition);
        let counter = 0
        const counterLimit = 5

        while(dist > tolerance && counter < counterLimit){
            jntCoord = backwards(jntCoord);
            jntCoord = forwards(jntCoord);
            dist = norm(jntCoord[jntCoord.length - 1], eePosition);
            counter += 1
        }

        // let robotDrawing = []

        // for (let idxJnt = 0; idxJnt < jntCoord.length - 1; ++idxJnt){
        //     robotDrawing.push(<line key={'link-' + idxJnt} x1={jntCoord[idxJnt].x} y1={jntCoord[idxJnt].y} x2={jntCoord[idxJnt + 1].x} y2={jntCoord[idxJnt + 1].y} stroke="red" />);
        //     robotDrawing.push(<circle key={'jnt-' + idxJnt} cx={jntCoord[idxJnt].x} cy={jntCoord[idxJnt].y} r={jointSize} fill="#f36464" />);
        // }

        return fk(jntCoord);
    }

    return (
        <>
        {
            ik(jntCoordinates, eePosition)
        }
        </>
    );
}

const Robot = () => {

    const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0})

    const jntCoordinates = forwardKinematics(Array(numberJoints).fill(0))

    const mouseMoveHandler = (event) => {
        setMouseCoordinates({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(()=>{
        window.addEventListener('mousemove', mouseMoveHandler);
        return (() =>{
            window.removeEventListener('mouseenter', mouseMoveHandler);
        })
    }, [])

    const test = () =>{
        return inverseKinematics(jntCoordinates, {x: mouseCoordinates.x / 10, y: mouseCoordinates.y / 10})

    }

    return (

    <div>
        <svg className="robot joint" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        {   
            test()
        }
        </svg>
    </div>
    
  )
}

export default Robot