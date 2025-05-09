const body = document.body;

const div = document.createElement('div')
body.append(div)
div.innerHTML = 'inject script'

const inhi = document.querySelector('#h1')
inhi.getAttribute('id')

const didi = document.createElement('div');
        document.body.appendChild(didi);

        didi.style.margin = 'auto'
        didi.style.height = '200px'
        didi.style.width = '200px'
        didi.style.backgroundColor = 'red'

const myList = document.getElementById('myList')
const listChildren = myList.children
const item = listChildren[2]
const copy = item.cloneNode(true)
myList.appendChild(copy)
myList.addEventListener('click', function (e){
    const target = e.target
})

const table = document.getElementById('table')
const btn = document.querySelector('#submit')
const tr = document.getElementsByTagName('tr')

btn.addEventListener('click', () =>{
    const newRow = document.createElement('tr')
    const col1 = document.createElement('td')
    const col2 = document.createElement('td')
    col1.textContent = `Row${tr.length + 1} cell 1`
    col2.textContent = `Row${tr.length + 1} cell 2`
    newRow.append(col1, col2)
    table.appendChild(newRow)
})