function Card(filme){
    let card = document.createElement("div")
    card.classList.add("card")
    
    let poster = document.createElement("img")
    poster.src = filme.poster
    poster.alt = "poster do filmes do Elvis"
    
    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.innerText = filme.titulo
    
    card.appendChild(poster)
    card.appendChild(titulo)

    return card
}