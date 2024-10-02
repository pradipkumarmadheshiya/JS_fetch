const movie_inp=document.getElementById("movie_inp")
const movie_search_btn=document.getElementById("movie_search_btn")
const movies_container=document.getElementById("movies_container")

const displayMovies=async ()=>{
    movies_container.innerHTML=""
    const title=movie_inp.value

    try{
        const res=await fetch(`https://www.omdbapi.com/?s=${title}&apikey=ad611b1e`)
        const data=await res.json()
        searchMovie(data)
    }
    catch(error){
        console.log("It's an error:", error)
    }
}
movie_search_btn.addEventListener("click", displayMovies)

function searchMovie(data){
    movie_inp.value=""

    data.Search.forEach(val=>{
        const box=document.createElement("div")
        box.className="box"
        const imgBox=document.createElement("div")
        imgBox.className="imgBox"
        const image=document.createElement("img")
        image.src=val.Poster
        const descriptionDiv=document.createElement("div")
        descriptionDiv.className="descriptionDiv"
        const Title=document.createElement("p")
        Title.textContent=`Title: ${val.Title}`
        const Year=document.createElement("p")
        Year.textContent=`Release Year: ${val.Year}`

        imgBox.append(image)
        descriptionDiv.append(Title, Year)
        box.append(imgBox, descriptionDiv)
        movies_container.append(box)
    })
}