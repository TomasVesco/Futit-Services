import { DiJava } from 'react-icons/di';

import './styles.scss';

const Java = () => {
    return(
    <div className='javaContainer'>
        <div>
            <p>
                Java <DiJava />
            </p>
        </div>
        <div>
            <p>
                1) Hibernate maps Java classes to database tables freeing the developer from programming tasks related to data persistence.
            </p>
        </div>
    </div>
    )
}

export default Java;