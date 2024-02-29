import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Knight from "@/app/experiment/dnd/chess/Knight";
import Queen from "@/app/experiment/dnd/chess/Queen";

const initialState = {
    items: [
        {
            type: 'knight',
            position: [2, 0],
            component: Knight
        }, {
            type: 'queen',
            position: [2, 4],
            component: Queen
        }
    ]
}

export const chess = createSlice({
    name: "chess",
    initialState,
    reducers: {
        reset: () => initialState,
        moveItem: (state, action: PayloadAction<{ type: string, position: number[] }>) => {
            state.items =
                state.items.map(item => item.type === action.payload.type ? { ...item, position: action.payload.position } : item)
        },
    },
});

export const {
    moveItem,
    reset,
} = chess.actions;
export default chess.reducer;