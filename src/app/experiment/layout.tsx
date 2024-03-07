import React from 'react'
import DropdownComponent from './component/Dropdown'
import { Container } from '@components/Container'
import './motion.css'

export default function layout({ params: { id }, children }: { params: { id: string }, children: React.ReactNode }) {
    const navs = ['motion', 'dnd', 'canvas', 'chat']
    return (
        <>
            <Container className='mt-4'>
                <DropdownComponent items={navs} />
            </Container>
            <div
            >
                {children}
            </div>
        </>
    )
}
