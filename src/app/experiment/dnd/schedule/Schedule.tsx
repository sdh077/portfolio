'use client'
import { useCallback, useEffect, useState } from "react";
import { Card, DragItem } from "./Card";
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hooks";
import { moveItem } from "@/redux/features/scheduleSlice";
import { ItemTypes } from "./Constraint";

export interface Item {
    id: number
    text: string
}
const style = {
    width: 400,
}
export default function Schedule({ dayItem }) {
    const items = useAppSelector((state) => state.scheduleReducer.items);



    return (
        <DndProvider backend={HTML5Backend}>
            {Object.entries(items).map(([day, cards]) =>
                <List key={day} day={day} cards={cards} />
            )}
        </DndProvider>
    )
}

const List = ({ day, cards }) => {
    const dispatch = useDispatch();
    const renderCard = useCallback(
        (card: { id: number; text: string }, day: string, index: number) => {
            return (
                <Card
                    key={day + card.id}
                    index={index}
                    id={card.id}
                    text={card.text}
                    day={day}
                    moveCard={moveCard}
                />
            )
        },
        [],
    )
    const moveCard = useCallback((dragDay: string, hoverDay: string, dragIndex: number, hoverIndex: number) => {
        dispatch(moveItem({ dragDay, hoverDay, dragIndex, hoverIndex }))
    }, [])
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: ItemTypes.CARD,
            drop(item: DragItem, monitor) {
                const dragIndex = item.index
                moveCard(item.day, day, dragIndex, null)
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            })
        }),

        []
    )
    return (
        <div key={day} style={style} ref={drop}>
            <div>
                {day}
            </div>
            {cards.map((card, i) => renderCard(card, day, i))}
        </div>
    )
}