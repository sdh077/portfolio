
'use client'

import { useState } from "react"
import './styles.concave.css'
import clsx from "clsx"
const SIZE = 12
const INIT_VALUE = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
]
export default function Concave() {
    const [turn, setTurn] = useState(0)
    const [field, setField] = useState(INIT_VALUE)
    const putStone = (row: number, col: number) => {
        if (field[row][col] !== -1) return alert('해당 자리에 놓을 수 없습니다')
        const tempField = [...field]
        tempField[row][col] = turn

        setField(tempField)

        check(row, col);
    }
    const check = (row: number, col: number) => {
        const minX = Math.max(row - 4, 0)
        const minY = Math.max(col - 4, 0)
        const maxX = Math.min(row + 4, SIZE - 1)
        const maxY = Math.min(col + 4, SIZE - 1)

        for (let x = minX; x <= row; x++) {
            if (x + 5 > SIZE) break;
            let flag = 0
            for (let i = 0; i < 5; i++) {
                if (field[x + i][col] % 2 !== turn % 2) break
                flag++
            }
            if (flag === 5) return endGame()
        }
        for (let y = minY; y <= row; y++) {
            if (y + 5 > SIZE) break;
            let flag = 0
            for (let i = 0; i < 5; i++) {
                if (field[row][y + i] % 2 === turn % 2) flag++
            }
            if (flag === 5) return endGame()
        }
        for (let x = row - 4, y = col - 4; x <= row; x++, y++) {
            if (x < 0 || x + 5 > SIZE || y < 0 || y + 5 > SIZE) break;
            let flag = 0
            for (let i = 0; i < 5; i++) {
                if (field[x + i][y + i] % 2 === turn % 2) flag++
            }
            if (flag === 5) return endGame()
        }
        for (let x = row - 4, y = col + 4; x <= row; x++, y--) {
            if (x < 0 || x + 5 > SIZE || y < 0 || y - 5 > SIZE) break;
            let flag = 0
            for (let i = 0; i < 5; i++) {
                if (field[x + i][y - i] % 2 === turn % 2) flag++
            }
            if (flag === 5) return endGame()
        }

        setTurn(turn => turn + 1)
    }
    const endGame = () => {
        alert(turn % 2 ? '횐색 승' : '검은색 승')
    }
    return (
        <div className="">
            <div className="w-full mx-auto">
                {turn % 2 ? '횐색 차례' : '검은색 차례'}
            </div>
            <div className="field-container mx-auto grid grid-cols-12 bg-slate-700">
                {field.map((row, i) =>
                    row.map((_, j) =>
                        <div key={`${i}-${j}`} className={"field w-1/15 h-[30px] flex"} onClick={() => putStone(i, j)}>
                            {field[i][j] !== -1 && <div className={clsx("w-[80%] h-[80%] m-auto rounded-full shadow-xl cursor-pointer", field[i][j] % 2 ? 'bg-white' : 'bg-black')} />}
                        </div>
                    )
                )}
            </div>
        </div>
    )
}
