let users=[]

let form=document.getElementById('userform')
let tablebody=document.getElementById('tablebody')
let editIndexInput=document.getElementById('editIndex')


// add entry to users
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    if(editIndexInput.value==""){
users.push({name,email})
    }else{
       users[editIndexInput.value]={name,email}
        editIndexInput.value=""
    }

    
    form.reset()
    displayContent()
})

// add contents to tablebody
let displayContent=()=>{
    tablebody.innerHTML=""
    users.forEach((user,index)=>{
        tablebody.innerHTML+=`
        <tr>
                    <td>${index+1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>
                        <div class="d-flex">
                           <button class="btn btn-warning" onclick="editUser(${index})">Edit</button>
                            <button class="btn btn-danger ms-3" onclick="deleteUser(${index})">Delete</button>

                        </div>
                    </td>
                </tr>
        `
    })  
 }

//  edit user
let editUser=(index)=>{
    document.getElementById('name').value = users[index].name
   document.getElementById('email').value= users[index].email
   editIndexInput.value=index
}

// delete
let deleteUser=(index)=>{
    if(confirm('Are you sure you want to delete the data?')){
        users.splice(index,1)
        displayContent()
    }
}
