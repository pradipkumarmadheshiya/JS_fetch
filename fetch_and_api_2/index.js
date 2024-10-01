const users_box=document.getElementById("users_box")
const get_users=document.getElementById("get_users")

const displayData=async ()=>{
    try{
        const res=await fetch("https://reqres.in/api/users?page=1")
        const data=await res.json()
        data.data.forEach(val=>{
            const box=document.createElement("div")
            box.className="box"
            const imgBox=document.createElement("div")
            const image=document.createElement("img")
            image.src=val.avatar
            const name=document.createElement("p")
            name.textContent=`${val.first_name} ${val.last_name}`
            const email=document.createElement("p")
            email.textContent=val.email

            imgBox.append(image)
            box.append(imgBox, name, email)
            users_box.append(box)
        })
    }
    catch(error){
        console.log("It's an error:",error)
    }
}
get_users.addEventListener("click", displayData)