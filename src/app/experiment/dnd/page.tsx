import React from 'react'
import Chess from './chess/page'
import ScheduleMain from './schedule/page'

export default function page() {
    return (
        <div>
            <div className='h-[100vh]'>
                <Chess />
            </div>
            <div className='h-[100vh]'>
                <ScheduleMain />
            </div>
        </div>
    )
}
