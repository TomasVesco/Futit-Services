import React from './ReactAnswers.js';
import { user } from './user.js';

const ReactAnswer9 = () => {
    return(
    <div className='reactAnswer9'>
        {Object.keys(user).map(item => 
            <div>
                <ol key={item}>
                    <li>
                        Name: {user[item].firstName}
                    </li>
                    <li>
                        Last Name: {user[item].lastName}
                    </li>
                    <li>
                        DNI: {user[item].dni}
                    </li>
                </ol>
            </div>
        )}
    </div>
    )
}

export default ReactAnswer9;