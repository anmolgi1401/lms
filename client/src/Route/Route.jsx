import Signin from '../modules/Landing/Signin/Signin';
import Home from '../modules/Landing/Home/Home';
import Library from '../modules/Library/Library';
import Dashboard from '../modules/Library/Dashboard/Dashboard';
import History from '../modules/Library/History/History';
import Fine from '../modules/Library/Fine/Fine';
import RequestBook from '../modules/Library/RequestBook/RequestBook';
import ErpHome from '../modules/Home'

export const AppRoutes = [
    {
        label:"Sign In",
        path:"/signin",
        component:Signin
    }, 
    {
        label:"Home",
        path:"/",
        component:Home
    }
];

export const ErpRoutes = [
    {
        label:"Library",
        path:"/library",
        component:Library
    },
    {
        label:"Dashboard",
        path:"/dashboard",
        component:ErpHome
    }
    
];

export const LibraryRoutes = [
    {
        label:"Dashboard",
        path:"/library",
        component:Dashboard
    },
    {
        label:"Request Book",
        path:"/library/requestBook",
        component:RequestBook
    },
    {
        label:"History",
        path:"/history",
        component:History
    },
    {
        label:"Fine",
        path:"/fine",
        component:Fine
    }
];



