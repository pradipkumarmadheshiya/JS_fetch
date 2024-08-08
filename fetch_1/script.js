const container=document.getElementsByClassName("container")[0]
const category=document.getElementById("category")
const ingredient=document.getElementById("ingredient")

                        getCategoryData

document.addEventListener("DOMContentLoaded", ()=>{

    async function getCategoryData(){
    
        try{
            const response=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            const data=await response.json()

            if (!response.ok){
                throw new Error("network not responding...")
            }

            data.meals.forEach(el=>{
                
                const box=document.createElement("div")
                box.className="box"        
                const meal=document.createElement("p")
                const mealThumb=document.createElement("img")
                const mealId=document.createElement("p")
        
                meal.textContent=el.strMeal
                mealThumb.src=el.strMealThumb
                mealId.textContent="ID: "+el.idMeal
                
                box.append(mealThumb, meal, mealId)
                container.append(box)
            })
        }
        catch (error){
            const box=document.createElement("p")
            box.textContent=("Something went wrong...")
            container.append(box)
        }
    }

    category.addEventListener("click", getCategoryData)
})

                                        // getIngredientData

const getIngredientData=async ()=>{

    try{
        const response=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
        const data=await response.json()
        data.meals.forEach(el=>{

        const box=document.createElement("div")
        box.className="box"
        const meal=document.createElement("p")
        const mealImg=document.createElement("img")
        const mealId=document.createElement("p")

        meal.textContent=el.strMeal
        mealImg.src=el.strMealThumb
        mealId.textContent="ID: "+el.idMeal

        box.append(meal, mealImg, mealId)
        container.append(box)
        })
    }
    catch (error){
        const err=document.createElement("p")
        err.textContent="Something went wrong..."
        container.append(err)
    }
}

ingredient.addEventListener("click", getIngredientData)