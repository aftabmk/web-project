import './automation.css'
import { useState, useEffect } from 'react'
const Automation = () => {
    const [active, toggle] = useState({ one: '', two: '', three: '', four: '', five: '' })
    const [check, setCheck] = useState({ one: '', two: '', three: '', four: '', five: '' })
    const [show, hide] = useState(false)

    useEffect(() => {
        console.log({ active, check })

    }, [active, check])
    const handleClick = (e) => {
        console.log('clicked')
        hide(!show)
        Object.entries(active).map(s => console.log({ 'bulb': s[0] }))
    }


    return (
        <div className="body">
            <p>Choose lights to control</p>
            <div className="input">
                <div className="light">
                    <input type="checkbox" name="light 1" id="light1" onClick={e => toggle({ ...active, one: e.target.checked })} />
                    <p>Light 1</p>
                </div>
                <div className='light'>
                    <input type="checkbox" name="ON" id="on" disabled={!active.one} onClick={e => setCheck({ ...check, one: e.target.checked })} checked={check.one} />
                    <p>ON</p>
                    <input type="checkbox" name="OFF" id="off" disabled={!active.one} onClick={e => setCheck({ ...check, one: !e.target.checked })} checked={!check.one} />
                    <p>OFF</p>
                </div>
            </div>
            <div className="input">
                <div className="light">
                    <input type="checkbox" name="light 2" id="light2" onClick={e => toggle({ ...active, two: e.target.checked })} />
                    <p>Light 2</p>
                </div>
                <div className='light'>
                    <input type="checkbox" name="ON" id="on" disabled={!active.two} onClick={e => setCheck({ ...check, two: e.target.checked })} checked={check.two} />
                    <p>ON</p>
                    <input type="checkbox" name="OFF" id="off" disabled={!active.two} onClick={e => setCheck({ ...check, two: !e.target.checked })} checked={!check.two} />
                    <p>OFF</p>
                </div>
            </div>
            <div className="input">
                <div className="light">
                    <input type="checkbox" name="light 3" id="light3" onClick={e => toggle({ ...active, three: e.target.checked })} />
                    <p>Light 3</p>
                </div>
                <div className='light'>
                    <input type="checkbox" name="ON" id="on" disabled={!active.three} onClick={e => setCheck({ ...check, three: e.target.checked })} checked={check.three} />
                    <p>ON</p>
                    <input type="checkbox" name="OFF" id="off" disabled={!active.three} onClick={e => setCheck({ ...check, three: !e.target.checked })} checked={!check.three} />
                    <p>OFF</p>
                </div>
            </div>
            <div className="input">
                <div className="light">
                    <input type="checkbox" name="light 4" id="light4" onClick={e => toggle({ ...active, four: e.target.checked })} />
                    <p>Light 4</p>
                </div>
                <div className='light'>
                    <input type="checkbox" name="ON" id="on" disabled={!active.four} onClick={e => setCheck({ ...check, four: e.target.checked })} checked={check.four} />
                    <p>ON</p>
                    <input type="checkbox" name="OFF" id="off" disabled={!active.four} onClick={e => setCheck({ ...check, four: !e.target.checked })} checked={!check.four} />
                    <p>OFF</p>
                </div>
            </div>
            <div className="input">
                <div className="light">
                    <input type="checkbox" name="light 5" id="light5" onClick={e => toggle({ ...active, five: e.target.checked })} />
                    <p>Light 5</p>
                </div>
                <div className='light'>
                    <input type="checkbox" name="ON" id="on" disabled={!active.five} onClick={e => setCheck({ ...check, five: e.target.checked })} checked={check.five} />
                    <p>ON</p>
                    <input type="checkbox" name="OFF" id="off" disabled={!active.five} onClick={e => setCheck({ ...check, five: !e.target.checked })} checked={!check.five} />
                    <p>OFF</p>
                </div>
            </div>
            <div className="button">
                <button onClick={handleClick}>Click</button>
            </div>
            {show && Object.entries(check).filter(s => s[1] === true).map((item, key) =>
            (
                <div key={key}>
                    <p>Bulb {item[0]} is ON</p>
                </div>
            ))}
            {show && Object.entries(check).filter(s => s[1] === false).map((item, key) =>
            (
                <div key={key}>
                    <p>Bulb {item[0]} is OFF</p>
                </div>
            ))}
        </div>

    );
}

export default Automation;