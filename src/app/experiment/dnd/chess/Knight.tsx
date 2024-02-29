import { useDispatch } from 'react-redux';
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'
import { useAppSelector } from '../../../../redux/hooks';
import { moveItem } from '@/redux/features/chessSlice';
interface DropResult {
    x: number;
    y: number;
}
export function canMoveKnight(knightPosition, toX, toY) {
    const dx = toX - knightPosition[0]
    const dy = toY - knightPosition[1]

    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
}
export default function Knight({ x, y }) {
    const dispatch = useDispatch();
    const items = useAppSelector((state) => state.chessReducer.items);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.CHESS,
        item: { name: 'knight' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (!dropResult) return
            if (canMoveKnight([x, y], dropResult.x, dropResult.y)) {
                dispatch(moveItem({ type: 'knight', position: [dropResult.x, dropResult.y] }))
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
            ♘
        </div>
    )
}