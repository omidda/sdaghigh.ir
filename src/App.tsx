import React, {useContext,lazy,Suspense}  from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Header from './components/layout/Header';

const Home = lazy(() => import('./components/layout/Home'));
const Experiences = lazy(() => import('./components/layout/Experiences'));
const Social = lazy(() => import('./components/layout/Social'));
const NotFound = lazy(() => import('./components/layout/NotFound'));

function App() {
 
  return (
    <div>
              <h1>
              TEST
              </h1>
              <p>
              TEST APP
              <Header title={"TEST TITLE"} />
              </p>


                <BrowserRouter>
                    <Suspense fallback={<h1> (( L O A D I N G )) </h1>}>
                      <Routes>
                        
                          <Route index element={<Home />} />
                          <Route path="expriences" element={<Experiences />} />
                          <Route path="social" element={<Social />} />
                          <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                </BrowserRouter>
              </div>
  );
}

export default App;
