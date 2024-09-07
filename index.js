let inputEl=document.getElementById('input-text')

let addBtn=document.getElementById('add-btn')

let infoText=document.getElementById('info-text')

let list=document.getElementById('list')

let items=[]

let pickBtn=document.getElementById('pick-btn')
pickBtn.style.display='none'

let randomChoice=document.getElementById('random-choice')

let startOverBtn=document.getElementById('start-over-btn')
startOverBtn.style.display='none'



function addItem(){

    let item=inputEl.value

    item=item.trim()

    if(item==="")
    {
        inputEl.value=""
        return
    }

    if(items.includes(item))
    {
        inputEl.value=""
        return
    }


    let listItem=document.createElement('li')

    listItem.innerText=`${item}`

    list.appendChild(listItem)

    items.push(item)

    infoText.style.display='none'

    startOverBtn.style.display='block'

    inputEl.value=""

    if(items.length>=2)
        pickBtn.style.display='block'

}

addBtn.addEventListener('click',addItem)

inputEl.addEventListener('keydown',function(event){
    if(event.key==='Enter')
        addItem()
})


pickBtn.addEventListener('click',function(){


    randomIndex=Math.floor(Math.random()*items.length)

    let theChosenOne=items[randomIndex]

    randomChoice.innerText=`I pick ${theChosenOne.toUpperCase()} for you`

    let listItems=document.querySelectorAll('li')

    listItems.forEach((listItem)=>{
        if(listItem.innerText===theChosenOne)
        { 
            listItem.style.backgroundColor='green'
            listItem.style.color='white'
        }
    })

    inputEl.style.pointerEvents='none'

    addBtn.style.pointerEvents='none'

    pickBtn.style.display='none'

})


startOverBtn.addEventListener('click',startOver)


function startOver(){

    list.innerHTML=""

    randomChoice.innerText=""

    items=[]

    inputEl.style.pointerEvents='auto'

    addBtn.style.pointerEvents='auto'

    startOverBtn.style.display='none'

}

