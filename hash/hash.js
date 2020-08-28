
class HashRouter {
    constructor(routerview){
        this.routerView = routerview
    }
    init(){

        /**
         * 页面 首次渲染
         * 如果不存在 hash 值，那么重定向到 #/
         * 若存在 hash 值，就渲染对应的 UI
         */

        if(!location.hash){
            location.hash="#/"
        }else{
            this.routerView.innerHTML = '当前路由：'+location.hash
        }

        // 监听 hash 值改变
        window.addEventListener('hashchange', ()=>{
            console.log(window.history)
            this.routerView.innerHTML = '当前路由：'+location.hash
        })
    }
    push(path){
        window.location.hash = path
    }
}

