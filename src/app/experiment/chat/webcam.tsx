'use client'
import React, { useRef, useState } from "react";
// import "./App.css";

const CONSTRAINTS = {
    video: true, //{ width: 1280, height: 720 },
    // audio: true,
};

function Webcam() {
    const [on, startCam] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const startVideo = async () => {
        const stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
        if (videoRef && videoRef.current && !videoRef.current.srcObject) {
            videoRef.current.srcObject = stream;
            startCam(true)
        }
    };
    const stopVideo = async () => {
        videoRef.current.srcObject = null;
        startCam(false)
    }

    return (
        <div className="mt-12 flex between-justify">
            <video autoPlay ref={videoRef} />
            {!on && <button onClick={startVideo}>cam start</button>}
            {on && <button onClick={stopVideo}>cam stop</button>}
        </div>
    );
}

export default Webcam;