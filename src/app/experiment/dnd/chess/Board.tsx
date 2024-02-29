'use client'
import React, { useState } from 'react'
import Square from './Square'
import Knight from './Knight'
import BoardSquare from './BoardSquare'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ItemTypes } from './Constants'
import Queen from './Queen'
import { useAppSelector } from '@/redux/hooks'

function RenderSquare({ i }) {
    const x = i % 8
    const y = Math.floor(i / 8)

    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <BoardSquare x={x} y={y}>
                <RenderPiece x={x} y={y} />
            </BoardSquare>
        </div>
    )
}
function RenderPiece({ x, y }) {
    const items = useAppSelector((state) => state.chessReducer.items);
    const piece = items.find(item => item.position[0] === x && item.position[1] === y && item.component)
    if (piece) return <><piece.component x={piece.position[0]} y={piece.position[1]} /></>
}


export default function Board() {
    const [items, moveItems] = useState([

    ])
    const squares = Array.from({ length: 64 }).map((_, i) => <RenderSquare i={i} />)
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {squares.map((square, index) => <React.Fragment key={`${square.key}${index}`}>{square}</React.Fragment>)}
            </div>
        </DndProvider>
    )
}