'use client'
import * as d3 from "d3";
import { mean, median } from "d3-array";
import { useEffect, useRef, useState } from "react";

export default function Graph({ }) {
    const [data, setData] = useState([30, 35, 40, 48, 60, 30]);
    const [value, setValue] = useState(30)
    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            event.preventDefault();
            if (event.code === 'ArrowDown') setValue(value => value - 1)
            if (event.code === 'ArrowUp') setValue(value => value + 1)
        })
    }, [])
    const addData = (event) => {
        event.preventDefault();
        if (event.repeat) return
        if (event.code === 'Space') setData([...data, value])
    }
    useEffect(() => {
        window.addEventListener("keydown", addData)
        return () => window.removeEventListener("keydown", addData)
    }
        , [data, value])


    return (
        <div>
            {value}
            <LinePlot data={data} />
        </div>
    );
}
export function LinePlot({
    data,
    width = 640,
    height = 400,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 20,
    marginLeft = 20
}) {
    const gx = useRef();
    const gy = useRef();
    const x = d3.scaleLinear(
        [0, data.length - 1],
        [marginLeft, width - marginRight]
    );
    const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
    const line = d3.line((d, i) => x(i), y);
    useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
    useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);
    return (
        <svg width={width} height={height}>
            <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
            <g ref={gy} transform={`translate(${marginLeft},0)`} />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                d={line(data)}
            />
            <g fill="white" stroke="currentColor" strokeWidth="1.5">
                {data.map((d, i) => (
                    <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
                ))}
            </g>
        </svg>
    );
}