// hooks
// 1：必须函数组件中写？为什么？
// 2: if for 不能用，为什么不能用？
import {
    useRoutes,
    Navigate
} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Detail from '../pages/Detail'
import Register from '../pages/Register'
import NotFount from '../pages/NotFount'
import ShopCar from '../pages/ShopCar'
import HomeClassify from '../pages/Home/Classify'
import HomeIndex from '../pages/Home/Home'


function Routers() {
    let commonRoutes = [{
        path: '/home',
        element: (< Home />),
        children: [{
            path: '/home',
            element: (<Navigate to="/home/index" />),
        },
        {
            path: '/home/index',
            element: (< HomeIndex />),
        }, {
            path: '/home/classify/:type_one',
            element: (< HomeClassify />),

        }
        ]
    }, {
        path: '/login',
        element: (< Login />),
    }, {
        path: '/register',
        element: (< Register />),
    }, {
        // path: '/detail/:goodId',
        path: '/detail',
        element: (< Detail />),
    }, {
        path: 'shopcar',
        element: (< ShopCar />),
    }, {
        path: '/',
        element: (< Navigate to="/home" />),
    }, {
        path: '*',
        element: (< NotFount />),
    },]
    return useRoutes(commonRoutes)
}

export default Routers