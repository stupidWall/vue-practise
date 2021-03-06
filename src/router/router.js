import App from '../App'

const home = r => require.ensure([], () => r(require("../page/home/home")), 'home')
const city = r => require.ensure([], () => r(require("../page/city/city")), 'city')
const msite = r => require.ensure([], () => r(require("../page/msite/msite")), 'msite')


export default [{
    path: '/',
    component: App,    // 顶级路由，对应index.html
    children: [
        // 当地址为空，跳转到home页面
        {
            path: "",
            redirect: '/home'
        },
        // 首页城市列表页
        {
            path: "/home",
            component: home
        },
        // 当前选择城市页
        {
            path: '/city/:cityid',
            component: city
        },
        //所有商铺列表页
        {
            path: '/msite',
            component: msite
        }
    ]

}]