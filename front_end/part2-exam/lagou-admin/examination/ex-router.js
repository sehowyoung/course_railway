let router_list = {
    "part1": {
        src: './pages/part1.html'
    },
    "part2": {
        src: './pages/part2.html'
    },
    "part3": {
        src: './pages/part3.html'
    }
}

function router(router_list) {
    let container = document.querySelector('.router-wrapper')
    window.addEventListener('hashchange', async function(){
        let hash = location.hash
        hash = hash.slice(1)

        let item = router_list[hash]

        if (item.data) {
            container.innerHTML = item.data
            return false
        }
        let data = await loadRouterData(item['src'])
        item["data"] = data
        container.innerHTML = data
    })
}
router(router_list)

async function loadRouterData(src) {
    let data = await xhr(src)
    return data
}