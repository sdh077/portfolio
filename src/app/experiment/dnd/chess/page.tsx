'use client'
import React, { useState } from 'react'
import Board from './Board'
import { Providers } from '@/redux/provider'

export default function Chess() {
    return (
        <Providers>
            <div style={{ height: '70vh', width: '70vh' }}>
                Chess Drag & Drop
                <Board />
            </div>
        </Providers>
    )
}