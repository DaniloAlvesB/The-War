console.log('resources loaded')

//pedras
let pedrasCount = parseInt(localStorage.getItem('pedras'))
let pedraInput = document.getElementById('pedras')

if(pedrasCount != null && pedrasCount != undefined && !isNaN(pedrasCount)){
    pedraInput.value = pedrasCount
}else{
    localStorage.setItem('pedras', 10)
}

pedraInput.addEventListener('input', (e) => {
    localStorage.setItem('pedras', pedraInput.value)
})

let buttons = document.querySelectorAll('.pedrabtn')
buttons = [].slice.call(buttons)

buttons.forEach((button) => {
    var value = parseInt(button.attributes.mult.nodeValue)
    button.addEventListener('click', (e) => {
        pedrasCount = parseInt(localStorage.getItem('pedras'))
        localStorage.setItem('pedras', pedrasCount + value)
        pedrasCount = parseInt(localStorage.getItem('pedras'))
        pedraInput.value = pedrasCount
    })
})

//alimento
let alimentosCount = parseInt(localStorage.getItem('alimentos'))
let alimentosInput = document.getElementById('alimentos')
if(alimentosCount != null && alimentosCount != undefined && !isNaN(alimentosCount)) {
    alimentosInput.value = alimentosCount
}else{
    localStorage.setItem('alimentos', 10)
}
alimentosInput.addEventListener('input', (e) => {
    localStorage.setItem('alimentos', alimentosInput.value)
})

buttons = document.querySelectorAll('.alimentobtn')
buttons = [].slice.call(buttons)

buttons.forEach((button) => {
    var value = parseInt(button.attributes.mult.nodeValue)
    button.addEventListener('click', (e) => {
        alimentosCount = parseInt(localStorage.getItem('alimentos'))
        localStorage.setItem('alimentos', alimentosCount + value)
        alimentosCount = parseInt(localStorage.getItem('alimentos'))
        alimentosInput.value = alimentosCount
    })
})