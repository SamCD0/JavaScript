function permitirSoltar(ev){
    ev.preventDefault()
}

function comecarArrastar(ev){
    ev.dataTransfer.setData("text", ev.Target.id)
}

function soltar(ev){
    ev.preventDefault()
    const id = ev.dataTransfer.getData("text")
    const elemento = document.getElementById(id)
    ev.Target.appendChild(elemento)
}