/**
 * history 模式路由
 */
class HistoryRouter {
    constructor(routerview){
        this.routerView = routerview
    }

    init(){
        console.log('init')
        let that = this
        // 路由改变
        window.addEventListener('popstate', ()=>{
            that.routerView.innerHTML = '当前路由：' + location.pathname
        })

        // 阻止 a 标签默认事件
        var linkList = document.querySelectorAll('a[href]')
        linkList.forEach(el => el.addEventListener('click', function (e) {
            e.preventDefault()
            history.pushState(null, '', el.getAttribute('href'))
            that.routerView.innerHTML = '当前路由：' + location.pathname
        }))

        // 路由 初始化
        console.log(location.pathname)
    }

    push(path){
        history.pushState(null, '', path)
        this.routerView.innerHTML = '当前路由：' + path
        console.log(window.history)
    }

    replace(path){
        history.replaceState(null, '', path)
        this.routerView.innerHTML = '当前路由：' + path
        console.log(window.history)
    }
}
