'use client'
import React from 'react'
import ZoomComponent from '../component/ZoomComponent'
import Tab from '../component/Tab'
import Counter from '../component/Counter'
import Animation from '../component/Animation'

const CountComponent = () => {
    return (
        <div className='flex justify-between w-full'>
            <div className='text-xl w-32 h-32 mx-4 bg-black flex justify-center items-center'>
                <Counter number={100} />
            </div>
            <div className='text-xl w-32 h-32 mx-4 bg-white text-black flex justify-center items-center'>
                <Counter number={5678} />
            </div>
            <div className='text-xl w-32 h-32 mx-4 bg-black flex justify-center items-center'>
                <Counter number={9632} />
            </div>
        </div>
    )
}
export default function Motion() {
    return (
        <div>
            <div className='h-[50vh]'>
                <CountComponent />
            </div>
            <div className='h-[50vh] flex justify-center'>
                <ZoomComponent />
            </div>
            <div className='h-[80vh]'>
                <Animation />
            </div>
            <div className='h-[50vh]'>
                <Tab />
            </div>
        </div>
    )
}
