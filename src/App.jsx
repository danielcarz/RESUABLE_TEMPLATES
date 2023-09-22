import {BrowserRouter} from "react-router-dom"

import './SASS/index.scss';

//Routes Handler
import { RoutesHandler } from "./ROUTES/RoutesHandler";


function App() {
 

  return (
   <BrowserRouter>
      <RoutesHandler></RoutesHandler>
   </BrowserRouter>
  )
}

export default App
