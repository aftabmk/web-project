import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import './timer.css'
import facebook from '../facebook.svg'
const Timer = () => {
    const [date, setDate] = useState(new Date())
    const [newDate, setNewDate] = useState()
    const [timer, setTimer] = useState({ day: '00', hour: '00', minute: '00', second: '00' })
    const time = { "date": date.getDate(), 'month': date.getMonth() + 1, 'year': date.getFullYear(), 'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds() }
    const navigate = useNavigate()
    useEffect(() => { setInterval(() => { setDate(new Date()) }, 1000); }, [])
    useEffect(() => { countDown() }, [date])
    const handleDate = (e) => {
        const dateSet = new Date(e.target.value)
        console.log(dateSet)
        setNewDate(dateSet)
    }
    const countDown = () => {
        if (!newDate) return
        const timer = newDate.getTime() - date.getTime()
        if (timer <= 0) return navigate('/gameover')
        const day = Math.floor(timer / (1000 * 60 * 60 * 24))
        const hour = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minute = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))
        const second = Math.floor((timer % (1000 * 60)) / 1000)
        setTimer({ day: prepend(day), hour: prepend(hour), minute: prepend(minute), second: prepend(second) })
    }
    const prepend = (data) => {
        if (data > 9) return data;
        if (data < 0) return data;
        return '0' + data
    }


    return (
        <>
            <h2 className="h">Timer App</h2>
            <div className="timeNow">
                <div className="time">
                    <h3>Current Date</h3>
                    <p className="p">{prepend(time.date)}/{prepend(time.month)}/{prepend(time.year)}</p>
                </div>
                <div className="time">
                    <h3>Current Time</h3>
                    <p className="p">{prepend(time.hour)}:{prepend(time.minute)}:{prepend(time.second)}</p>
                </div>
            </div>
            <input type="datetime-local" id="start" onBlur={handleDate}></input>
            <div className="countDown">
                <h2 className="h">Timer</h2>
                {newDate && (
                    <p className="p">{timer.day} day {timer.hour} hour {timer.minute} minute {timer.second} second</p>
                )}
                <button onClick={countDown}>countDown</button>
                <div>
                    <img src={facebook} alt="fb" />
                </div>
            </div>
        </>
    );
}

export default Timer;