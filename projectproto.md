class Dog {
    static all = []
    constructor(name, age, sex, description, status) {

        this.name = name,
            this.age = age,
            this.sex = sex,
            this.description = description,
            this.status = status,
            Dog.all.push(this),
            this.addEventBinder()

    }

    addEventBinder() {
        let formDiv = document.getElementById("dog-form")
        formDiv.innerHTML = ""
        let button = document.getElementById("crete-btn")
        button.addEventListener("click", this.renderForm)
       
        


    }

    renderForm() {

     let forms = document.getElementById("dog-form")

     let html = `<form>
     <fieldset>
      <legend>Name </legend>
      <input type="text" id="name"/>
      <legend>Age </legend>
      <input type="text" id="age"/>
      <legend>Sex </legend>
      <input type="text" id="sex"/>
      <legend>Description</legend>
      <input type="text" id="description"/>
      <legend>Status </legend>
      <input type="text" id="status"/><br>
      <input type="submit" id="dog-submit" value="Add Dogs"/>
      </fieldset>
    </form>`
        forms.innerHTML = html;
       document.querySelector("form").addEventListener("submit",this.createDogs)
    }
    createDogs(event) {

        console.log("you are created")
    
    
    
      event.preventDefault()
    }



}


// form.addEventListener("submit",createDogs)

   fetch("http://localhost:3000/dogs")
    .then(resp => resp.json())
    .then(dogs =>{
        Object.entries(dogs).forEach(dog => {

            html = `<div class="card" data-dog-id="${dog.id}">
            <button class="view-events-dog-button" style="background-color:blue">View Record</button>  
            <button class="edit-dog-button" style="background-color:orange">Edit Info</button>  
            <button class="delete-dog-button" style="background-color:red">Delete Dog</button>
            </br></br>
            <strong class="dog-name">${dog.name}</strong> <br/>
            <strong>Age: </strong>${dog.age} years young <br/>
            <strong>Sex: </strong>${dog.sex} <br/>
            <div class="additional-info" style="display:none">     
            <strong>Description: </strong>${dog.description}<br/>
            <strong>Status: </strong>${dog.status}<br/>
            </div>
        </div>`
        let dogList = document.querySelector("#dogs-list")
            dogList.innerHTML += html
    
    
    
        })
    





    })
    ================
    event.preventDefault()
    ClearPage()
    let dogId = event.target.parentElement.dataset.dogId

    fetch(`http://localhost:3000/dogs/${dogId}`)
        .then(response => response.json())
        .then(dogs => {
            clearList()
            
            let forms = document.getElementById("dog-form")

            let html = `<form data-id="${dogs.id}">
            <fieldset>
             <legend>Name </legend>
             <input type="text" id="name" value="${dogs.name}"/>
             <input type="hidden" id="dogId">
             <legend>Age </legend>
             <input type="text" id="age" value="${dogs.age}"/>
             <legend>Sex </legend>
             <input type="text" id="sex" value="${dogs.sex}"/>
             <legend>Description</legend>
             <input type="text" id="description" value="${dogs.description}"/>
             <legend>Status </legend>
             <input type="text" id="status" value="${dogs.status}"/><br>
             <legend>Title </legend>
             <input type="text" id="title" value="${dogs.events[0].title}"/>
             <legend>Description </legend>
             <textarea id="description" name="description" rows="10" cols="50" value="${dogs.events[0].description}">
             </textarea><br>
             <input type="submit" id="dog-submit" style="background-color:blueviolet" value="Edit Dogs"/>
             </fieldset>
           </form>`
            forms.innerHTML = html
            forms.addEventListener("submit", updateDogs)


        })

}

 let forms = document.getElementById("dog-form")

    // html = `<form data-id="${dogs.id}">
    //         <fieldset>
    //         <legend>Name </legend>
    //         <input type="text" id="name" value="${dogs.name}"/>
    //         <input type="hidden" id="dogId">
    //         <legend>Age </legend>
    //         <input type="text" id="age" value="${dogs.age}"/>
    //         <legend>Sex </legend>
    //         <input type="text" id="sex" value="${dogs.sex}"/>
    //         <legend>Description</legend>
    //         <input type="text" id="description" value="${dogs.description}"/>
    //         <legend>Status </legend>
    //         <input type="text" id="status" value="${dogs.status}"/><br>
    //         <input type="submit" id="dog-submit" style="background-color:blueviolet" value="Edit Dogs"/>
    //         </fieldset>
    //        </form>`
    // forms.innerHTML = html
    // forms.addEventListener("submit", updateDogs)


    //         })

    //          
    //          





    //     })

    let dogList = document.querySelectorAll("#dogs-list")
            clearList()
            dogList.innerHTML = `<div class="card" data-dog-id="${dogObj.id}">
    
         </br></br>
         <strong class="dog-name">${dogObj.name}</strong> <br/>
           <strong>Age: </strong>${dogObj.age} years young <br/>
          <strong>Sex: </strong>${dogObj.sex} <br/>
         <div class="additional-info">     
          <strong>Description: </strong>${dogObj.description}<br/>
          <strong>Status: </strong>${dogObj.status}<br/>
          <div>
         <strong>Title: </strong>${dogsobj.events[0].title}<br/>
          <strong>Description: </strong>${dogsobj.events[0].description}<br/>

        </div>
         </div>`


        })


        let dogForms = document.getElementById("dog-form")
            let html = `<form data-id="${dogs.id}">
            <fieldset>
            <legend>Name </legend>
            <input type="text" id="name" value="${dogs.name}"/>
            <input type="hidden" id="dogId">
            <legend>Age </legend>
            <input type="text" id="age" value="${dogs.age}"/>
            <legend>Sex </legend>
            <input type="text" id="sex" value="${dogs.sex}"/>
            <legend>Description</legend>
            <input type="text" id="description" value="${dogs.description}"/>
            <legend>Status </legend>
            <input type="text" id="status" value="${dogs.status}"/><br>
            <legend>Title </legend>
            <input type="text" id="description" value="${dogs.events[0].title}"/>
            <legend>Discription</legend>
            <input type="text" id="description" value="${dogs.events[0].description}"/><br>
            <input type="submit" id="dog-submit" style="background-color:blueviolet" value="Edit Dogs"/>
            </fieldset>
           </form>`
            dogForms.innerHTML = html
            forms.addEventListener("submit",updateDogs)
            

            ==================================
            function renderEventForm() {
            clearList()

            let forms = document.getElementById("dog-form")
            let dogId = event.target.parentElement.dataset.dogId
            let html = `<form id="${dogId}">
            <fieldset>
            <legend>Title </legend>
            <input type="hidden">
            <input type="text" id="title"/>
            <legend>Description </legend>
            <textarea id="description" name="description" rows="10" cols="50">
            </textarea><br>
            <input type="submit" id="dog-submit" style="background-color:goldenrod" value="Submit Event"/>
           </fieldset>
           </form>`
            forms.innerHTML = html
            forms.addEventListener("submit", createEvent)

            clearValue()


            function createEvent(event) {

                event.preventDefault()
                let title = document.getElementById("title").value
                let description = document.getElementById("description").value
                let dog_id = event.target.id

                let formEvent = {
                    dog_id: dog_id,
                    title: title,
                    description: description


                }


                fetch("http://localhost:3000/events", {
                    method: "POST",
                    body: JSON.stringify(formEvent),
                    headers: {
                        "Content-Type": "application/json", "Accept": "application/json"
                    }
                }).then(response => response.json())
                    .then(eventObject => {
                        showRecord(eventObject)



                    })

                renderDogToPage()

            }

            function clearValue() {
                title = document.getElementById("title").value = ""
                description = document.getElementById("description").value = ""


            }

            function showRecord(eventObject) {
                console.log(eventObject)
                clearList()

                let id = eventObject.target ? eventObject.target.parentElement.dataset.dogId : eventObject.dog_id

                fetch(`http://localhost:3000/dogs/${id}`)
                    .then(response => response.json())
                    .then(dogsobj => {
                        renderShow(dogsobj)
                    })

            }

            function renderShow(dogsobj) {

                let dogList = document.querySelector("#dogs-list")

                dogList.innerHTML = dogsobj.events.map(dog => `<div class="card" data-dog-id="${dog.id}">
    
    </br></br>
    <strong class="dog-name">${dogsobj.name}</strong> <br/>
      <strong>Age: </strong>${dogsobj.age} years young <br/>
     <strong>Sex: </strong>${dogsobj.sex} <br/>
    <div class="additional-info">     
     <strong>Description: </strong>${dogsobj.description}<br/>
     <strong>Status: </strong>${dogsobj.status}<br/>
    
    </div>
    <div>
      <strong>Title: </strong>${dogsobj.events[0].title}<br/>
      <strong>Description: </strong>${dogsobj.events[0].description}<br/>

    </div>
    </div>`

                ).join("")


            }



            function removeDogs(event) {
                event.preventDefault()
                ClearPage()
                let dogId = event.target.parentElement.dataset.dogId

                fetch(`http://localhost:3000/dogs/${dogId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })
                    .then(response => response.json())
                    .then(json => {

                        let selectedDog = document.querySelector(`.card[data-dog-id="${dogId}"]`)
                        selectedDog.remove()
                        renderDogToPage()
                    })



            }


            function editEventAnddogData(event) {

                event.preventDefault()
                clearList()

                let dogId = event.target.parentElement.dataset.dogId

                fetch(`http://localhost:3000/events/${dogId}`)
                    .then(response => response.json())
                    .then(dogEvents => renderdogAndEvent(dogEvents))

            }


            function renderdogAndEvent(dogEvents) {

                let dogForms = document.getElementById("dog-form")
                let html = `<form data-id="${dogEvents.id}">
    <fieldset>
    <legend>Name </legend>
    <input type="text" id="name" value="${dogEvents.name}"/>
    <input type="hidden" id="dogId">
    <legend>Age </legend>
    <input type="text" id="age" value="${dogEvents.age}"/>
    <legend>Sex </legend>
    <input type="text" id="sex" value="${dogEvents.sex}"/>
    <legend>Description</legend>
    <input type="text" id="description" value="${dogEvents.description}"/>
    <legend>Status </legend>
    <input type="text" id="status" value="${dogEvents.status}"/><br>
    <legend>Title </legend>
    <input type="text" id="title" value="${dogEvents.events[0].title}"/>
    <legend>Discription</legend>
    <input type="text" id="description" value="${dogEvents.events[0].description}"/><br>
    <input type="submit" id="dog-submit" style="background-color:blueviolet" value="Edit Dogs"/>
    </fieldset>
   </form>`
    dogForms.innerHTML = html

    document.querySelector("form").addEventListener("submit", updateDogs)

}




            function updateDogs(event) {
                console.log("did you hit here")
                renderDogToPage()

                event.preventDefault()
                let dogId = event.target.dataset.id
                let dogObject = {
                    name: document.getElementById("name").value,
                    age: document.getElementById("age").value,
                    sex: document.getElementById("sex").value,
                    description: document.getElementById("description").value,
                    status: document.getElementById("status").value,
                    title: document.getElementById("title").value,
                    description: document.getElementById("description").value

                }
                fetch(`http://localhost:3000/dogs/${dogId}`, {
                    method: "PATCH",
                    body: JSON.stringify(dogObject),
                    headers: {
                        "Content-Type": "application/json", "Accept": "application/json"
                    }
                }).then(response => response.json())
                    .then(dogObj => renderEditPage(dogObj))
            }


            function renderEditPage() {

                html = `<div class="card" data-dog-id="${dogObj.id}">
      <button class="view-events-dog-button" style="background-color:blue">View Record</button>  
      <button class="edit-dog-button" style="background-color:orange">Edit Info</button>  
      <button class="delete-dog-button" style="background-color:red">Delete Dog</button>
      </br></br>
      <strong class="dog-name">${dogObj.name}</strong> <br/>
        <strong>Age: </strong>${dogObj.age} years young <br/>
       <strong>Sex: </strong>${dogObj.sex} <br/>
       <button class="new-btn" style="background-color:goldenrod">Add Event</button>
      <div class="additional-info" style="display:none">     
       <strong>Description: </strong>${dogObj.description}<br/>
       <strong>Status: </strong>${dogObjstatus}<br/>
       <div class="additional-info" style="display:none">     
       <strong>Title: </strong>${dogObj.events[0].title}<br/>
       <strong>Description: </strong>${dogObj.events[0].description}<br/>
     </div>
  </div>`
                let dogList = document.querySelector("#dogs-list")
                dogList.innerHTML = html
}











document.addEventListener("DOMContentLoaded", () => {
    renderDogToPage()

})
addEventBinder()
function addEventBinder() {
    let formDiv = document.getElementById("dog-form")
    formDiv.innerHTML = ""
    let button = document.getElementById("crete-btn")
    let showDogBtn = document.getElementById("show-btn")
    button.addEventListener("click", renderForm)
    showDogBtn.addEventListener("click", renderDogToPage)
    



}
//Creating form 
function renderForm() {
    clearList()
    let forms = document.getElementById("dog-form")

    let html = `<form>
    <fieldset>
     <legend>Name </legend>
     <input type="text" id="name"/>
     <legend>Age </legend>
     <input type="text" id="age"/>
     <legend>Sex </legend>
     <input type="text" id="sex"/>
     <legend>Description</legend>
     <input type="text" id="description"/>
     <legend>Status </legend>
     <input type="text" id="status"/><br>
     <input type="submit" id="dog-submit" style="background-color:blueviolet" value="Add Dogs"/>
     </fieldset>
   </form>`
    forms.innerHTML = html
    forms.addEventListener("submit", createDogs)

}

function clearPage() {
    let dogForm = document.querySelector("#dog-form")
    dogForm.innerHTML = ""

}


function createDogs(event) {
    console.log("what good")


    
    let formDate = {
        name:document.getElementById("name").value,
        age:document.getElementById("sex").value,
        sex:document.getElementById("sex").value,
        description:document.getElementById("description").value,
        status:document.getElementById("status").value
    }

    name = document.getElementById("name").value = ""
    age = document.getElementById("age").value = ""
    sex = document.getElementById("sex").value = ""
    description = document.getElementById("description").value = ""
    status = document.getElementById("status").value = ""

    fetch("http://localhost:3000/dogs", {
        method: "POST",
        body: JSON.stringify(formDate),
        headers: {
            "Content-Type": "application/json", "Accept": "application/json"
        }
    }).then(response => response.json())
        .then(()=> addDogCard(dogs))
        .catch((error) => alert(error.message))
    // renderDogToPage()
    
    
    event.preventDefault()
}

function clearList() {
    let dogList = document.querySelector("#dogs-list")
    dogList.innerHTML = ""


}


function renderDogToPage() {

    clearPage()

   
    fetch("http://localhost:3000/dogs")
        .then(resp => resp.json())
        .then(dogs => {
              dogs.forEach(dog => addDogCard(dog))
            // dogList.innerHTML = dogs.map(dog =   
        }).then(() =>{
            let newBtns = document.querySelectorAll(".new-btn")
            newBtns.forEach(newBtn => newBtn.addEventListener("click", renderEventForm))
            let buttonRecordViews = document.querySelectorAll(".view-events-dog-button")
            buttonRecordViews.forEach(buttonRecordView => buttonRecordView.addEventListener("click", showRecord))
            let buttonDeletes = document.querySelectorAll(".delete-dog-button")
            buttonDeletes.forEach(buttonDelete => buttonDelete.addEventListener("click", removeDogs))
            let edits = document.querySelectorAll(".edit-dog-button")
            edits.forEach(edit => edit.addEventListener("click", editPage))
        } )


}

function addDogCard(dog){

    let dogList = document.querySelector("#dogs-list")
    let dogCard = document.createElement("div")
        dogCard.className = "card"
        dogCard.dataset.dogId = `${dog.id}`
        dogCard.innerHTML =
          `<button class="view-events-dog-button" style="background-color:blue">View Record</button>  
          <button class="edit-dog-button" style="background-color:orange">Edit Info</button>  
          <button class="delete-dog-button" style="background-color:red">Delete Dog</button>
          </br></br>
      <strong class="dog-name">${dog.name}</strong> <br/>
        <strong>Age: </strong>${dog.age} years young <br/>
       <strong>Sex: </strong>${dog.sex} <br/>
       <button class="new-btn" style="background-color:goldenrod">Add Event</button>
       <div class="additional-info" style="display:none">     
       <strong>Description: </strong>${dog.description}<br/>
       <strong>Status: </strong>${dog.status}<br/>
    
    </div>`
    dogList.appendChild(dogCard)
  
}

function renderEventForm() {
    clearList()

    let forms = document.getElementById("dog-form")
    let dogId = event.target.parentElement.dataset.dogId
    console.log("please show me this", dogId)
    let html = `<form id="${dogId}">
    <fieldset>
     <legend>Title </legend>
     <input type="text" id="title"/>
     <legend>Description </legend>
     <textarea id="description" name="description" rows="10" cols="50">
     </textarea><br>
     <input type="submit" id="dog-submit" style="background-color:goldenrod" value="Submit Event"/>
     </fieldset>
   </form>`
    forms.innerHTML = html
    forms.addEventListener("submit", createEvent)

    clearValue()
}

function createEvent(event) {
    event.preventDefault()
   
    let formEvent = {
        dog_id: event.target.id,
        title:document.getElementById("title").value,
        description:document.getElementById("description").value


    }


    fetch("http://localhost:3000/events", {
        method: "POST",
        body: JSON.stringify(formEvent),
        headers: {
            "Content-Type": "application/json", "Accept": "application/json"
        }
    }).then(response => response.json())
        .then(eventObject => {
            showRecord(eventObject)



        })
    renderDogToPage()
}

function clearValue() {
    title = document.getElementById("title").value = ""
    description = document.getElementById("description").value = ""


}

function showRecord(eventObject) {
      console.log(eventObject)
    clearList()
    
    let id = eventObject.target ? eventObject.target.parentElement.dataset.dogId : eventObject.dog_id 

    fetch(`http://localhost:3000/dogs/${id}`)
        .then(response => response.json())
        .then(dogsobj => {
            renderShow(dogsobj)
        })

}

function renderShow(dogsobj) {

    let dogList = document.querySelector("#dogs-list")

    dogList.innerHTML = dogsobj.events.map(dog => `<div class="card" data-dog-id="${dog.id}">
    
    </br></br>
    <strong class="dog-name">${dogsobj.name}</strong> <br/>
      <strong>Age: </strong>${dogsobj.age} years young <br/>
     <strong>Sex: </strong>${dogsobj.sex} <br/>
    <div class="additional-info">     
     <strong>Description: </strong>${dogsobj.description}<br/>
     <strong>Status: </strong>${dogsobj.status}<br/>
    
    </div>
    <div>
      <strong>Title: </strong>${dogsobj.events[0].title}<br/>
      <strong>Description: </strong>${dogsobj.events[0].description}<br/>
    </div>
    </div>`

    ).join("")


}



function removeDogs(event) {

    clearPage()
    let dogId = event.target.parentElement.dataset.dogId
   
    fetch(`http://localhost:3000/dogs/${dogId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(json => {

            let selectedDog = document.querySelector(`.card[data-dog-id="${dogId}"]`)
            selectedDog.remove()
            renderDogToPage()
        })



}

function editPage() {
      
    
    let dogId = event.target.parentElement.dataset.dogId
    
    clearPage()
    fetch(`http://localhost:3000/dogs/${dogId}`)
     .then(response => response.json())
     .then(dogs => {
        let forms = document.getElementById("dog-form")

    let html = `<form data-id="${dogs.id}">
    <fieldset>
     <legend>Name </legend>
     <input type="text" id="name" value="${dogs.name}"/>
     <input type="hidden" id="dogId">
     <legend>Age </legend>
     <input type="text" id="age" value="${dogs.age}"/>
     <legend>Sex </legend>
     <input type="text" id="sex" value="${dogs.sex}"/>
     <legend>Description</legend>
     <input type="text" id="description" value="${dogs.description}"/>
     <legend>Status </legend>
     <input type="text" id="status" value="${dogs.status}"/><br>
     <legend>Title </legend>
     <input type="text" id="title" value="${dogs.events[0].title}"/>
     <legend>Description </legend>
     <textarea id="description" name="description" rows="10" cols="50" value="${dogs.events[0].description}">
     </textarea><br>
     <input type="submit" id="dog-submit" style="background-color:blueviolet" value="Edit Dogs"/>
     </fieldset>
   </form>`
    forms.innerHTML = html
    forms.addEventListener("submit", updateDogsEvent)
        
     })
     
}


function updateDogsEvent(event){
      event.preventDefault()
 
 
     let dogId = event.target.dataset.id
     let dogObject = {
     name: document.getElementById("name").value,
     age: document.getElementById("age").value,
     sex: document.getElementById("sex").value,
     description: document.getElementById("description").value,
     status: document.getElementById("status").value,
     title: document.getElementById("title").value,
     description: document.getElementById("description").value

 }
 fetch(`http://localhost:3000/dogs/${dogId}`, {
     method: "PATCH",
     body: JSON.stringify(dogObject),
     headers: {
         "Content-Type": "application/json", 
         "Accept": "application/json"
     }
    }).then(response => response.json())
     .then(dogObj => console.log(dogObj))
      



}

// function showRecord(eventObject) {
     
//     clearList()
    
//     let id = eventObject.target ? eventObject.target.parentElement.dataset.dogId : eventObject.dog_id 

//     fetch(`http://localhost:3000/dogs/${id}`)
//         .then(response => response.json())
//         .then(dogsobj => {
//             renderShow(dogsobj)
//         })

// }

// function renderShow(dogsobj) {
//     clearPage()
//     let dogList = document.querySelector("#dogs-list")

//     dogList.innerHTML = dogsobj.events.map(dog => `<div class="card" data-dog-id="${dog.id}">
    
//     </br></br>
//     <strong class="dog-name">${dogsobj.name}</strong> <br/>
//       <strong>Age: </strong>${dogsobj.age} years young <br/>
//      <strong>Sex: </strong>${dogsobj.sex} <br/>
//     <div class="additional-info">     
//      <strong>Description: </strong>${dogsobj.description}<br/>
//      <strong>Status: </strong>${dogsobj.status}<br/>
    
//     </div>
//     <div>
//       <strong>Title: </strong>${dogsobj.events[0].title}<br/>
//       <strong>Description: </strong>${dogsobj.events[0].description}<br/>
//     </div>
//     </div>`

//     ).join("")


// }

=============real code====
document.addEventListener("DOMContentLoaded", () => {
    renderDogToPage()
    addEventBinder()
})
// class Dog{
   
//     constructor(data){
//     this.id = data.id
//     this.name = data.name
//     this.age = data.age 
//     this.description = data.description
//     this.status = data.status 

//   }
   
   
 
//  }


function addEventBinder() {
    let formDiv = document.getElementById("dog-form")
    formDiv.innerHTML = ""
    let button = document.getElementById("crete-btn")
    let showDogBtn = document.getElementById("show-btn")
    button.addEventListener("click", renderForm)
    showDogBtn.addEventListener("click", renderDogToPage)
    
}
//Creating form 
function renderForm() {
    clearList()
    let forms = document.getElementById("dog-form")

    let html = `<form>
    <fieldset>
     <legend>Name </legend>
     <input type="text" id="name"/>
     <input type="hidden" id="dogId">
     <legend>Age </legend>
     <input type="text" id="age"/>
     <legend>Sex </legend>
     <input type="text" id="sex"/>
     <legend>Description</legend>
     <input type="text" id="description"/>
     <legend>Status </legend>
     <input type="text" id="status"/><br>
     <input type="submit" id="dog-submit" style="background-color:blueviolet" value="Add Dogs"/>
     </fieldset>
   </form>`
    forms.innerHTML = html
    forms.addEventListener("submit", createDogs)

}

function clearPage() {
    let dogForm = document.querySelector("#dog-form")
    dogForm.innerHTML = ""

}

function clearDogValue(){
    name = document.getElementById("name").value = ""
    age = document.getElementById("age").value = ""
    sex = document.getElementById("sex").value = ""
    description = document.getElementById("description").value = ""
    status = document.getElementById("status").value = ""


}

function createDogs(event) {
    event.preventDefault()
    // let dog = new Dog(name,age,description,status)
    // dog.renderDogToPage()
    let formDate = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        sex: document.getElementById("sex").value,
        description: document.getElementById("description").value,
        status: document.getElementById("status").value

    }
     clearDogValue()

    fetch("http://localhost:3000/dogs", {
        method: "POST",
        body: JSON.stringify(formDate),
        headers: {
            "Content-Type": "application/json", "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(dogs => {
           
        renderDogToPage(dogs)})
    
    clearList()
}   

function clearList() {
    let dogList = document.querySelector("#dogs-list")
    dogList.innerHTML = ""


}


function renderDogToPage() {

    clearList()
    clearPage()

    let dogList = document.querySelector("#dogs-list")
    fetch("http://localhost:3000/dogs")
        .then(resp => resp.json())
        .then(dogs => {

            dogList.innerHTML = dogs.map(dog => `<div class="card" data-dog-id="${dog.id}">
      <button class="view-events-dog-button" style="background-color:blue">View Record</button>  
      <button class="delete-dog-button" style="background-color:red">Delete Dog</button>
      </br></br>
      <strong class="dog-name">${dog.name}</strong> <br/>
        <strong>Age: </strong>${dog.age} years young <br/>
       <strong>Sex: </strong>${dog.sex} <br/>
       <button class="new-btn" style="background-color:goldenrod">Add Event</button>
      <div class="additional-info" style="display:none">     
       <strong>Description: </strong>${dog.description}<br/>
       <strong>Status: </strong>${dog.status}<br/>
    
    </div>
  </div>`



            ).join("")
            attachClickButton()
            
        })

        
}

function attachClickButton(){
    let newBtns = document.querySelectorAll(".new-btn")
    newBtns.forEach(newBtn => newBtn.addEventListener("click", renderEventForm))
    let buttonRecordViews = document.querySelectorAll(".view-events-dog-button")
    buttonRecordViews.forEach(buttonRecordView => buttonRecordView.addEventListener("click", showRecord))
    let buttonDeletes = document.querySelectorAll(".delete-dog-button")
    buttonDeletes.forEach(buttonDelete => buttonDelete.addEventListener("click", removeDogs))

}

function removeDogs(event) {

    clearPage()
    let dogId = event.target.parentElement.dataset.dogId
   
    fetch(`http://localhost:3000/dogs/${dogId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(json => {

            let selectedDog = document.querySelector(`.card[data-dog-id="${dogId}"]`)
            selectedDog.remove()
            renderDogToPage()
        })



}

function showRecord(eventObject) {
     
    clearList()
    
    let id = eventObject.target ? eventObject.target.parentElement.dataset.dogId : eventObject.dog_id 
    

    fetch(`http://localhost:3000/dogs/${id}`)
        .then(response => response.json())
        .then(dog => {
              console.log(dog)
            let dogList = document.querySelector("#dogs-list")

            dogList.innerHTML=`<div class="card" data-dog-id="${dog.id}">
            
            </br></br>
            <strong class="dog-name">${dog.name}</strong> <br/>
              <strong>Age: </strong>${dog.age} years young <br/>
             <strong>Sex: </strong>${dog.sex} <br/>
            <div class="additional-info">     
             <strong>Description: </strong>${dog.description}<br/>
             <strong>Status: </strong>${dog.status}<br/>
            
            </div>
        
            </div>`
        
            

        })
        
}



// FROM THIS DIVISION IS EVENTS


//create to fetch event here










