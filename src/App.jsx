import {BrowserRouter} from "react-router-dom"

import './SASS/index.scss';

//components
import { TestingPage } from "./01-TestingPage";


function App() {
 

  return (
   <BrowserRouter>
      <TestingPage></TestingPage>
   </BrowserRouter>
  )
}

export default App
