import React from 'react';

import NavBar from './components/navbar/NavBar';
import ReactAnswers from './components/react/ReactAnswers';
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