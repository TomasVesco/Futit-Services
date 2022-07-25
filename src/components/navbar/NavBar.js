import './styles.scss';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <div className="navContainer">
        <div>
            <p>
                Futit Services - Challenge
            </p>
        </div>
        <div>
            <Link to={'/JavaScript'}>JavaScript</Link>
        </div>
        <div>
            <Link to={'/React'}>React</Link>
        </div>
        <div>
            <Link to={'/SQL'}>SQL</Link>
        </div>
        <div>
            <Link to={'/Java'}>Java</Link>
        </div>
    </div>
    );
}

export default NavBar;