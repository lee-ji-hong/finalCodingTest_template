class Router {
    // const router = new Router({
    //     '/': ProductPage,
    //     '/detail/:id': ProductDetail,
    //     '/cart': Cart,
    //     '/order': Cart,
    // });
    constructor(routes) {
        if (!routes) {
            console.log('페이지를 찾을 수 없습니다');
        }
        this.routes = routes;
    }

    init(rootElementId) {
        if (!rootElementId) {
            console.log("라우트를 찾을 수 없습니다");
            return null;
        }
        this.rootElementId = rootElementId;
        this.routing(window.location.pathname);

        window.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'a') {
                e.preventDefault();
                this.routePush(e.target.href);
            }
        });

        // 뒤로가기 
        window.onpopstate = () => this.routing(window.location.pathname);
    }

    routePush(pathname) {
        window.history.pushState({}, null, pathname);
        this.routing(window.location.pathname);
    }
    routing(pathname) {
        const [_, routeName, ...param] = pathname.split('/');
        let page = '';

        if (this.routes[pathname]) {
            const component = new this.routes[pathname];
            page = component.render();
        }
        if (page) {
            this.render(page);
        }
    }
    render(page) {
        const rootElement = document.querySelector(this.rootElementId);
        rootElement.innerHTML = '';
        rootElement.appendChild(page);
    }
}

export default Router