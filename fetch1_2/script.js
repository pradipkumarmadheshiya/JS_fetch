const container=document.getElementsByClassName("container")[0]
const fetchUser=document.getElementById("fetchUser")

async function getUser(){

    const url = 'https://reqres.in/api/users?page=1'
    try{
        const response=await fetch(url)
        const data=await response.json()
        if (!response.ok){
            throw new Error("Network not responding")
        }

        displayUser(data.data)
    }
    catch(error){
        const box=document.createElement("div")
        box.textContent="Something went wrong.."
        container.append(box)
    }
}

function displayUser(data){

    container.innerHTML=""

    data.forEach(el=>{

        const box=document.createElement("div")
        box.className="box"
        // const id=document.createElement("p")
        const email=document.createElement("a")
        const avatar=document.createElement("img")
        avatar.className="avatar"
    
        avatar.src=el.avatar
        // id.textContent="ID: "+el.id
        email.textContent="Email: "+el.email
        email.src=el.email
    
        const name=document.createElement("p")
        name.textContent=`${el.first_name} ${el.last_name}`
        
        box.append(avatar,name,email)
        container.append(box)
    })
}

fetchUser.addEventListener("click", getUser)