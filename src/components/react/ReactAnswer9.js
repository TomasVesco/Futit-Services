import React from './ReactAnswers.js';
import { user } from './user.js';

const ReactAnswer9 = () => {
    return(
    <div>
        {Object.keys(user).map(item => 
            <ol key={item}>
                <li>
                    {user[item].firstName}
                </li>
                <li>
                    {user[item].lastName}
                </li>
                <li>
                    {user[item].dni}
                </li>
            </ol>
        )}
    </div>
    )
}

export default ReactAnswer9;