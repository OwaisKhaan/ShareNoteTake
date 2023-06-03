//https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js
//https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js

import{initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL : "https://realtime-database-851b1-default-rtdb.europe-west1.firebasedatabase.app/"
}

let title = localStorage.getItem("title")


const initApp = initializeApp(appSettings)
const database = getDatabase(initApp)
let listInDB = ref(database,title)



let inputEl = document.getElementById('input-el')
let btnEl = document.getElementById('btn-el')
let listEl = document.getElementById('list-el')
let titleName = document.getElementById('title-para')

titleName.innerHTML = title









onValue(listInDB,function(snapshot){

    if(snapshot.exists()){

    listEl.innerHTML = ""

    let itemsStoredInDB = Object.entries(snapshot.val())
    
    for(let i = 0; i < itemsStoredInDB.length; i++)
    renderListItem(itemsStoredInDB[i])
    }else{
        listEl.textContent = ""
    }
})


btnEl.addEventListener('click', function(){
    let el = inputEl.value
    if(el !== ""){
        push(listInDB, el)
    }
    


    clearinput()
})

function clearinput(){
    inputEl.value = ""
}

function renderListItem(items){

    let itemId = items[0]
    let itemValue = items[1]

    let newListItem = document.createElement('li')

    newListItem.textContent = itemValue

    listEl.append(newListItem)

    newListItem.addEventListener('dblclick', function(){
        let locationOfItemInDB = ref(database, `${title}/${itemId}`)
        remove(locationOfItemInDB)
    })


}