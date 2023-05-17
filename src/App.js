import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import jwtDecode from "jwt-decode";
import Home from '../src/components/Home/Home'
import Login from '../src/components/Login/Login'
import Layout from './components/Layout/Layout';
import Movie from '../src/components/Movie/Movie'
import Moviedetails from './components/Moviedetails/Moviedetails';
import Regestration from '../src/components/Regestration/Regestration';
import Notfound from '../src/components/Notfound/Notfound'
import Tvshowsdetails from '../src/components/Tvshowsdetails/Tvshowsdetails'
import Tvdetails from './components/Tvdetails/Tvdetails';
import Tvshow from '../../trending-movies/src/components/Tvshow/Tvshow'
import People from './components/People/People';
import { useState } from 'react';
function App() {
  const [userData, setUserData] = useState(null);
  function saveUserData(){
    let encodedToken=localStorage.getItem('userToken')
    let decodedToken= jwtDecode(encodedToken)
    setUserData(decodedToken)
  }

  let routers= createHashRouter([{path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'login',element:<Login saveUserData={saveUserData}/> },
      {path:'register',element:<Regestration/>},
      {path:'*', element:<Notfound/>},
      {path:'moviedetails/:id', element:<Moviedetails/>},
      {path:'tvshowsdetails/:id', element:<Tvshowsdetails/>},
      {path:'movie', element:<Movie/>},
      {path:'tvdetails/:id', element:<Tvdetails/>},
      {path:'tvshow', element:<Tvshow/>},
      {path:'people', element:<People/>},
    ]}
  ])
 
  
  return <>
  <RouterProvider router={routers} />
  </>
    
 
}

export default App;
