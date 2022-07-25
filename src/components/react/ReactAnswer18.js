import './styles.scss';

import React from 'react';

import { useState } from 'react';

const ReactAnswer18 = () => {

    let [ count, setCount ] = useState(0);
    const [title, setTitle] = useState(0)
    
    const calc = () => {
        !isNaN(title) ? setCount(count += parseInt(title)) : alert('Only numbers are accepted');
    }

    return (
    <div className='reactAnswer18'>
        <div>
            <div>
                <span>{count}</span>
            </div>
            <div>
                <input onChange={event => setTitle(event.target.value)} />
                <button onClick={calc}>Calculate</button>
            </div>
        </div>
    </div>
    );
}

export default ReactAnswer18;