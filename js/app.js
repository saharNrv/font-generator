const inputElem = document.querySelector('#input-text')
const poppins = document.querySelector('#poppins')
const mrDafeo = document.querySelector('#mr-dafeo')
const mrsSaint = document.querySelector('#mrs-saint')
const shareTech = document.querySelector('#share-tech')
const Wallpoet = document.querySelector('#Wallpoet')

inputElem.addEventListener('input', (event) => {

    let inputValue = event.target.value.trim()

    if (inputValue === '') {
        poppins.innerHTML = 'poppins'
        mrDafeo.innerHTML = 'mrDafeo'
        mrsSaint.innerHTML = 'mrsSaint'
        shareTech.innerHTML = 'shareTech'
        Wallpoet.innerHTML = 'Wallpoet'
    } else {
        poppins.innerHTML=inputValue;
        mrDafeo.innerHTML=inputValue;
        mrsSaint.innerHTML=inputValue;
        shareTech.innerHTML=inputValue;
        Wallpoet.innerHTML=inputValue;
    }


})