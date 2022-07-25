import { DiStreamline } from 'react-icons/di';

import './styles.scss';

const JavaScript = () => {
    return(
    <div className='sqlContainer'>
        <div>
            <p>
                SQL <DiStreamline />
            </p>
        </div>
        <div>
            <p>
                1) SELECT Name FROM AD_Window WHERE AD_Window_ID = 100
            </p>
            <p>
                2) UPDATE AD_Window SET Name = '--' + AD_Window_ID.Name WHERE AD_Window_ID = 100
            </p>
            <p>
                3) SELECT * FROM AD_Tab WHERE AD_Window_ID = 100
            </p>
        </div>
    </div>
    )
}

export default JavaScript;