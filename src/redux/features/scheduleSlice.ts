import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import update from 'immutability-helper'

const initialState = {
    items: {
        '2023-04-05': [
            {
                id: 1,
                text: 'Write a cool JS library',
            },
            {
                id: 2,
                text: 'Make it generic enough',
            },
            {
                id: 3,
                text: 'Write README',
            },
            {
                id: 4,
                text: 'Create some examples',
            },
            {
                id: 5,
                text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            },
            {
                id: 6,
                text: '???',
            },
            {
                id: 7,
                text: 'PROFIT',
            },
        ],
        '2023-04-06': [
            {
                id: 11,
                text: 'Write a cool JS library',
            },
            {
                id: 12,
                text: 'Make it generic enough',
            },
            {
                id: 13,
                text: 'Write README',
            },
            {
                id: 14,
                text: 'Create some examples',
            },
            {
                id: 15,
                text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            },
            {
                id: 16,
                text: '???',
            },
            {
                id: 17,
                text: 'PROFIT',
            },
        ]
    }
}

export const schedule = createSlice({
    name: "schedule",
    initialState,
    reducers: {
        reset: () => initialState,
        moveItem: (state, action: PayloadAction<{ dragDay: string, hoverDay: string, dragIndex: number, hoverIndex: number }>) => {
            const { dragDay, hoverDay, dragIndex, hoverIndex } = action.payload;
            const prevCards = { ...state.items }
            if (dragDay !== hoverDay) {
                const temp = prevCards[dragDay].splice(dragIndex, 1)
                prevCards[hoverDay] = update(prevCards[hoverDay], {
                    $push: temp,
                })
            } else {
                prevCards[dragDay] = update(prevCards[dragDay], {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, prevCards[dragDay][dragIndex]]
                    ]
                })
            }
            state.items = prevCards
        },
    },
});

export const {
    moveItem,
    reset,
} = schedule.actions;
export default schedule.reducer;