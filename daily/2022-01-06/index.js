// 防抖: 一段时间内，连续触发一个事件，仅执行一次，可以通过setTimeout实现
function Debounce(func, wait=500){
    console.log("func", func)
    let timer
    return (params) => {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            func(params)
        }, wait)
    }
}
// 适用于input resize最后执行一次

// 节流：一段时间内，连续触发一个事件，固定的时间执行一次，类似技能冷却

function throttle(func, wait=500){
    let isWorking = false
    return (params) => {
        if(isWorking){
            return false
        }
        isWorking = true
        setTimeout(() => {
            func(params)
            isWorking = false
        }, wait)
    }
}
