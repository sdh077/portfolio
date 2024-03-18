import React from 'react'

export default function Cubic() {
    return (
        <div>
            <div
                className='w-[100px] h-[100px] bg-black hover:w-[300px]'
                style={{ transition: 'width 1s', transitionTimingFunction: 'linear' }} >linear</div>
            <div
                className='w-[100px] h-[100px] bg-black hover:w-[300px]'
                style={{ transition: 'width 1s', transitionTimingFunction: 'ease-in' }}>ease-in</div>
            <div
                className='w-[100px] h-[100px] bg-black hover:w-[300px]'
                style={{ transition: 'width 1s', transitionTimingFunction: 'ease-out' }} >ease-out</div>
            <div
                className='w-[100px] h-[100px] bg-black hover:w-[300px]'
                style={{ transition: 'width 1s', transitionTimingFunction: 'ease-in-out' }} >ease-in-out</div>
        </div>
    )
}
