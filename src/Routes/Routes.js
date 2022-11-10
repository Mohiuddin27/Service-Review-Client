import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Addreview from '../pages/Addreview/Addreview';
import Addservice from '../pages/Addservice/Addservice';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Blog from '../pages/Blog/Blog';
import Home from '../pages/Home/Home';
import Myreview from '../pages/Myreview/Myreview';
import Updatereview from '../pages/Myreview/Updatereview';
import Services from '../pages/Services/Services';
import Singleservice from '../pages/Singleservice/Singleservice';
import Privateroute from './Privateroute/Privateroute';


const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/services')

           
        },
        {
            path:'/services',
            element:<Services></Services>
        },
        {
            path:'/service/:id',
            element:<Singleservice></Singleservice>,
            loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path:'/service-addreview/:id',
            element:<Privateroute><Addreview></Addreview></Privateroute>,
            loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path:'/addservice',
            element:<Privateroute><Addservice></Addservice></Privateroute>
        },
        {
            path:'/myreview',
            element:<Privateroute><Myreview></Myreview></Privateroute>
        },
        {
            path:'/update-review/:id',
            element:<Privateroute><Updatereview></Updatereview></Privateroute>,
            loader:({params})=>fetch(`http://localhost:5000/single-reviews/${params.id}`)

        },
        {
           path:'/blog',
           element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
      
    }
    
])
export default router;