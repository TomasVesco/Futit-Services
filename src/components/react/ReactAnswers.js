import { Link } from 'react-router-dom';
import { DiReact } from 'react-icons/di';

import './styles.scss';

const React = () => {
    return(
    <div className='reactContainer'>
        <div>
            <p>
                React <DiReact />
            </p>
        </div>
        <div>
            <p>
                1) It is a mechanism to put data inside the component.
            </p>
            <p>
                2) A function or class that returns an element.
            </p>
            <p>
                3) Class component
                Function component.
                After declared the components one can be a parent and 	another the children.
            </p>
            <p>
                4) Is a variable with information to use it after and might be change.
            </p>
            <p>
                5) There are three: <br></br>
                    <strong>Mounting</strong> when i put elements on the DOM <br></br>
                    <strong>Updating</strong> with props or statement <br></br>
                    <strong>Unmounting</strong> when is removed from the DOM 
            </p>
            <p>
                6) 	To set the statement of a component i will write for example:
                const [thereAreItems, setThereAreItems] = useState(false);
            </p>
            <p>
                7) Other: const [count, setCount] = useState(0);
            </p>
            <p>
                8) The component will re-render because is and updating
            </p>
            <p>
                9) <Link to={'/React/9'}>Exercism 9</Link>
            </p>
            <p>
                10) <Link to={'/React/10'}>Exercism 10</Link>
            </p>
            <p>
                11) import name from 'name';
            </p>
            <p>
                12) import MyComponent from './MyComponent';
            </p>
            <p>
                13) The component is missing the return.
            </p>
            <p>
                14) This component render a count of clicks, and every time you click the component will re-render with the new value.
            </p>
            <p>
                15) The problem is the statement becouse is inside the render(), should beetween the declaration of the class and the render().
            </p>
            <p>
                16) Using async await method, becouse the call will return a promise. If dont use the await the answer will be undefined or Promise pending. 
                    Example on src/React/Code/ApiCall
            </p>
            <p>
                17) The use is for side-effects. This happen when the changes dont target the output.
            </p>
            <p>
                18) <Link to={'/React/18'}>Exercism 18</Link>
            </p>
        </div>
    </div>
    )
}

export default React;