//D6
var btnD6 = document.getElementById('btnD6')
var divD6 = document.getElementById('lancD6')

btnD6.addEventListener('click', function(){
    var date = new Date()
    var d6 = Math.floor(Math.random() * 6) + 1

    var text = document.createElement('h5')
    text.innerText = d6

    var dateText = document.createElement('p')
    dateText.innerText = date.toLocaleString('pt-BR', { timezone: 'UTC' })

    divD6.innerText = 'Resultado'
    divD6.appendChild(text)
    divD6.appendChild(dateText)
})
