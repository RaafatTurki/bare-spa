let url, base, route, router_view

let routes = [
    {
        path: "/home",
        view: "$home",
        default: true
    },
    {
        path: "/about",
        view: "$about",
    },
]




//Init
getRouterViewElement()
getUrl()
setDefaultRoute()
urlChangeEventListener()




//Update Functions
function goTo(path) {
    let isRouteFound = false
    routes.forEach(r => {
        if (r.path == path) {
            setRoute(r)
            isRouteFound = true
        }
    })
    if (!isRouteFound) setView("$not_found")
    return isRouteFound
}

function setRoute(route) {
    setUrl(route.path)
    setView(route.view)
}

function setView(view) {
    router_view.setAttribute("include", view)
    includeHTML()
}

function getUrl() {
    url = window.location.href
    route = url.substr(url.indexOf("#")+1, url.length-1)
}

function setUrl(path) {
    url = window.location.href
    base = url.substr(0, url.indexOf("#")+1)
    window.location.assign(base + path)
}




//Setup Funcitons
function getRouterViewElement() {
    let all = document.getElementsByTagName("*")
    for (let i = 0; i < all.length; i++) {
        if (all[i].hasAttribute("router-view")) {
            router_view = all[i]
        }
    }
    if (!router_view) console.log("No Router View Found :(")
}

function urlChangeEventListener() {
    window.addEventListener('popstate', () => {
        getUrl()
        goTo(route)
    })
}

function setDefaultRoute() {
    routes.forEach(r => {
        if (r.default) goTo(r.path)
    })
}