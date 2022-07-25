import './styles.scss';

const JavaScript = () => {
    return(
    <div className='javaScriptContainer'>
        <div>
            <p>
                JavaScript
            </p>
        </div>
        <div>
            <p>1) The 4th output is undefined because of the scope. cuadradoDeA is declared inside the function calculoBinomio and then called outside.</p>
            <p>
                2) const s2 = "HELLO WORLD!";
                alert(s2.toLowerCase());
            </p>
            <p>
                3) The code is on the folder src/JavaScript/Code/3.js 
            </p>
            <p>
                4) The code is on the folder src/JavaScript/Code/4.js 
            </p>
        </div>
    </div>
    )
}

export default JavaScript;