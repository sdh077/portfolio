import React from 'react'
import moment from 'moment-timezone';
import Schedule from './Schedule';
import { Providers } from '@/redux/provider';

export default async function ScheduleMain() {
    const day = {
        start: '2024-04-05 10:00:00',
        end: '2024-04-15 14:00:00'
    }
    const startDay = moment.tz(day.start, "Asia/Seoul");
    const endDay = moment.tz(day.end, "Asia/Seoul");

    const days = daysToArray(startDay, endDay)
    const dayItem = {
        '2024-04-05': ['1', '2', '3'],
        '2024-04-08': ['1', '2', '3'],
    }

    return (
        <Providers>
            Schedule Drag & Drop
            <div className='flex overflow-x-auto space-x-8 w-full text-black'>
                <Schedule dayItem={dayItem} />
            </div>
        </Providers>

    )
}

const daysToArray = (start, end) => {

    const days = [];
    let day = start

    while (day <= end) {
        days.push(day.format('yyyy-MM-DD'));
        day = day.clone().add(1, 'd');
    }
    return days
}