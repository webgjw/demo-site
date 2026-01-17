import { createStore } from 'vuex'
import user from './modules/user'

export default createStore({
    state: {
        routeLoaded: false, // 路由是否已经加载完成
        firstRoute: null, // 第一次加载的路由信息
        menuTree: null, // 菜单树数据
    },
    mutations: {
        setRouteLoaded(state, loaded) {
            state.routeLoaded = loaded;
        },
        setFirstRoute(state, route) {
            state.firstRoute = route;
        },
        setMenuTree(state, menuTree) {
            state.menuTree = menuTree;  
        }
    },
    modules: {
        user
    }
})