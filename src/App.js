
import Component1 from "./Component/component1";
import Titel1 from "./page/title";
import Home1 from "./page/home";
import About1 from "./page/about";
import Gallery1 from "./page/gallery";
import Dynamiccomp1 from "./page/dynamiccomp";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import BarChart from './Component/BarChart';

import { useState } from "react";
//import Gallery from "./page/gallery";

function App() {
  

//<BarChart/>



    return (
     // <div className="App">

<BrowserRouter>
<Routes>
<Route path='/' element={<Home1/>}></Route>
<Route path='/about' element={<About1/>}></Route>
<Route path='/gallery' element={<Gallery1/>}></Route>


</Routes>


</BrowserRouter>


    //  </div>

    );
  }
  
  export default App;
