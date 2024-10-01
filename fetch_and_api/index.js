const get_category=document.getElementById("get_category")
const get_ingredient=document.getElementById("get_ingredient")
const cat_ing_box=document.getElementsByClassName("cat_ing_box")[0]

const displayCatData=()=>{
    cat_ing_box.innerHTML=""
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            data.meals.forEach(val=>{

                const box=document.createElement("div")
                box.className="box"
                const itemName=document.createElement("p")
                itemName.className="itemName"
                itemName.textContent=val.strMeal
                const imgDiv=document.createElement("div")
                imgDiv.className="imgDiv"
                const categoryImage=document.createElement("img")
                categoryImage.src=val.strMealThumb

                imgDiv.append(categoryImage)
                box.append(imgDiv,itemName)
                cat_ing_box.append(box)
            })
        })
        .catch(error=>{
            console.log("it's an error:",error)
        })
}
get_category.addEventListener("click", displayCatData)

const displayIngData=()=>{
    cat_ing_box.innerHTML=""

    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            data.meals.forEach(val=>{
                const box=document.createElement("div")
                box.className="box"
                const itemName=document.createElement("p")
                itemName.className="itemName"
                itemName.textContent=val.strMeal
                const imgDiv=document.createElement("div")
                imgDiv.className="imgDiv"
                const image=document.createElement("img")
                image.src=val.strMealThumb

                imgDiv.append(image)
                box.append(imgDiv,itemName)
                cat_ing_box.append(box)
            })
        })
        .catch(error=>{
            console.log("It's an error:", error)
        })
}
get_ingredient.addEventListener("click", displayIngData)