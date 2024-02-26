'use client'

import React from 'react'
import Animation from '../component/Animation'
import DropdownComponent from '../component/Dropdown'
import ZoomComponent from '../component/ZoomComponent'
import { Container } from '@components/Container'
import { useRouter } from 'next/navigation'
import Counter from '../component/Counter'
import Tab from '../component/Tab'

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

export default function page({ params: { id } }: { params: { id: string } }) {
    const navs =
    {
        'zoom': <ZoomComponent />,
        'animation': <Animation />,
        'counter': <CountComponent />,
        'tab': <Tab />
    }
    const router = useRouter()

    const fn = (name) => router.push(name)
    const navItems = Object.keys(navs).map(nav => ({
        name: nav,
        function: () => fn(`/motion/${nav}`)
    }))

    return (
        <>
            <Container className='mt-4'>
                <DropdownComponent items={navItems} />
            </Container>
            <div className='absolute left-1/2 top-1/4' style={{
                transform: 'translateX(-50%)'
            }}>
                {navs[id]}
            </div>
        </>
    )
}
