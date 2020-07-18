
document.addEventListener("DOMContentLoaded", () => {
    renderDogToPage()
    addEventBinder()
})
// addEventBinder()
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
    document.querySelector("form").addEventListener("submit",createDogs)
    
}

function ClearPage() {
    let dogForm = document.querySelector("#dog-form")
    dogForm.innerHTML = ""

}


function createDogs(event) {
    console.log("what good")
    
    
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let sex = document.getElementById("sex").value
    let description = document.getElementById("description").value
    let status = document.getElementById("status").value

    let formDate = {
        name: name,
        age: age,
        sex: sex,
        description: description,
        status: status

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
      .then(dogs => renderDogToPage(dogs))
    // renderDogToPage()
    renderDogToPage()
    // clearList()
    event.preventDefault()
}

function clearList() {
    let dogList = document.querySelector("#dogs-list")
    dogList.innerHTML = ""


}


function renderDogToPage() {

    ClearPage()

    let dogList = document.querySelector("#dogs-list")
    fetch("http://localhost:3000/dogs")
        .then(resp => resp.json())
        .then(dogs => {

            dogList.innerHTML = dogs.map(dog =>`<div class="card" data-dog-id="${dog.id}">
      <button class="view-events-dog-button" style="background-color:blue">View Record</button>  
      <button class="edit-dog-button" style="background-color:orange">Edit Info</button>  
      <button class="delete-dog-button" style="background-color:red">Delete Dog</button>
      </br></br>
      <strong class="dog-name">${dog.name}</strong> <br/>
        <strong>Age: </strong>${dog.age} years young <br/>
       <strong>Sex: </strong>${dog.sex} <br/>
       <button id="new-btn" style="background-color:goldenrod">Add Event</button>
      <div class="additional-info" style="display:none">     
       <strong>Description: </strong>${dog.description}<br/>
       <strong>Status: </strong>${dog.status}<br/>
    
    </div>
  </div>`



  ).join("")
  let newBtns = document.querySelectorAll("#new-btn")
  newBtns.forEach(newBtn => newBtn.addEventListener("click", renderEventForm))
  let buttonRecordViews = document.querySelectorAll(".view-events-dog-button")
  buttonRecordViews.forEach(buttonRecordView => buttonRecordView.addEventListener("click", showRecord))
  let buttonDeletes = document.querySelectorAll(".delete-dog-button")
  buttonDeletes.forEach(buttonDelete => buttonDelete.addEventListener("click", removeDogs))      

        })

       
}

function renderEventForm() {
    clearList()

    let forms = document.getElementById("dog-form")
    let dogId = event.target.parentElement.dataset.dogId
    console.log("please show me this",dogId)
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
    document.querySelector("form").addEventListener("submit", createEvent)

    clearValue()
}

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
        .then(events => {
            showRecord(events)


            
        })
        renderDogToPage()
}

function clearValue() {
    title = document.getElementById("title").value = ""
    description = document.getElementById("description").value = ""


}

function showRecord() {
    
    // clearList()
    let dogList = document.querySelector("#dogs-list")
    let id = event.target.parentElement.dataset.dogId
    
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



function removeDogs() {
    ClearPage()
    let dogsDivs = document.querySelectorAll("#dogs-list .card")
     dogsDivs.forEach(dogDvis => {

      dogId = dogDvis.dataset.dogId
      
      fetch(`http://localhost:3000/dogs/${dogId}`,{
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
            
        })



     })

    

     

}









