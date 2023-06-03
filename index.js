//take value from input and store it in localstorage
let titleInput = document.getElementById('title-name')
let titleSelect = document.getElementById('title-select')
let title = ""

titleSelect?.addEventListener('click', function(){
    
    title = titleInput.value
    if(title === ""){

    }
    else{
        localStorage.clear()
        localStorage.setItem("title", title)

        window.location.href = "main.html"
    }
    
})
