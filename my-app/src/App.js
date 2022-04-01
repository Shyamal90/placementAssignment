import './App.css';
import checkOut from './components/checkOut';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'

function App() {
  return(
    <>
     {/* <Routes>
       <Route path='/' element={<Home/>}/>
       {/* <Route /> */}
     {/* </Routes> */} */}
     <Home/>
    </>
  )
}

export default App;



/*
   1. Make 10 different data lists.
   2. Data has some properties like
      1. id
      2. From which shop
      3. Offers
      4. Rating of the product
      5. Payment Option []
      6. Name

    3. 
*/