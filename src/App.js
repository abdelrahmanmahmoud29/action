import './App.css';
import {createBrowserRouter, RouterProvider}from 'react-router-dom'
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
function App() {




  let routers= createBrowserRouter([{path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'login',element:<Login/>},
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
  <RouterProvider router={routers}></RouterProvider>
  

  </>
    
 
}

export default App;
