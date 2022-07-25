import React from 'react';

import NavBar from './components/navbar/NavBar';
import ReactAnswers from './components/react/ReactAnswers';
import ReactAnswer9 from './components/react/ReactAnswer9';
import ReactAnswer10 from './components/react/ReactAnswer10';
import ReactAnswer18 from './components/react/ReactAnswer18';
import JavaScriptAnswers from './components/javascript/JavaScriptAnswers';
import SqlAnswer from './components/sql/SqlAnswer';
import Java from './components/java/JavaAnswers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div>
          <header>
            <NavBar />
          </header>
          <section>
            <div>
              <Routes>
                <Route path='/JavaScript' element={<JavaScriptAnswers />}/>
                <Route path='/React' element={<ReactAnswers />}/>
                <Route path='/React/9' element={<ReactAnswer9 />}/>
                <Route path='/React/10' element={<ReactAnswer10 />}/>
                <Route path='/React/18' element={<ReactAnswer18 />}/>
                <Route path='/SQL' element={<SqlAnswer />}/>
                <Route path='/Java' element={<Java />}/>
              </Routes>
            </div>
          </section>
        </div>
      </BrowserRouter>
  );
}

export default App;