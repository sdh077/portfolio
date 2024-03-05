'use client'
import type { Identifier, XYCoord } from 'dnd-core'
import type { FC } from 'react'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './Constraint'
import { moveItem } from '@/redux/features/scheduleSlice'
import { useDispatch } from 'react-redux'


const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
}

export interface CardProps {
    id: any
    text: string
    index: number
    day: string
    moveCard: (dragDay: string, hoverDay: string, dragIndex: number, hoverIndex: number) => void
}

export interface DragItem {
    index: number
    id: string
    type: string
    day: string
}

export const Card: FC<CardProps> = ({ id, text, index, day, moveCard }) => {
    const ref = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch();
    const [{ handlerId }, drop] = useDrop<
        DragItem,
        void,
        { handlerId: Identifier | null, drag: any }
    >({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                drag: { day },
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            // Time to actually perform the action
            if (monitor.getItem().day === day) {
                dispatch(moveItem({ dragDay: monitor.getItem().day, hoverDay: day, dragIndex, hoverIndex }))
            }

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },

    })

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index, day }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
            {text}
        </div>
    )
}

