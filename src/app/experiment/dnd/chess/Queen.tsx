import { useDispatch } from 'react-redux';
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'
import { useAppSelector } from '@/redux/hooks';
import { moveItem } from '@/redux/features/chessSlice';
interface DropResult {
    x: number;
    y: number;
}
export function canMoveQueen(QueenPosition, toX, toY) {
    const dx = toX - QueenPosition[0]
    const dy = toY - QueenPosition[1]

    return (
        (Math.abs(dx) === 0 && Math.abs(dy) !== 0) ||
        (Math.abs(dx) !== 0 && Math.abs(dy) === 0)
    )
}
export default function Queen({ x, y }) {
    const dispatch = useDispatch();
    const items = useAppSelector((state) => state.chessReducer.items);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.CHESS,
        item: { name: 'Queen' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (canMoveQueen([x, y], dropResult.x, dropResult.y)) {
                dispatch(moveItem({ type: 'queen', position: [dropResult.x, dropResult.y] }))
            }
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 50,
                margin: 'auto',
                fontWeight: 'bold',
                cursor: 'move',
            }}
        >
            Q
        </div>
    )
}