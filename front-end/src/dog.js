

renderDogToPage()
addEventBinder()

function addEventBinder() {
    let formDiv = document.getElementById("dog-form")
    formDiv.innerHTML = ""
    let button = document.getElementById("crete-btn")
    button.addEventListener("click", renderForm)
    let showDogBtn = document.getElementById("show-btn")
    showDogBtn.addEventListener("click", () => {
        clearEventForm()
        renderDogToPage()

    })

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

function clearDogValue() {
    name = document.getElementById("name").value = ""
    age = document.getElementById("age").value = ""
    sex = document.getElementById("sex").value = ""
    description = document.getElementById("description").value = ""
    status = document.getElementById("status").value = ""


}

function createDogs(event) {

    event.preventDefault()
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

            renderDogToPage(dogs)
        })

    clearList()
}

function clearList() {
    let dogList = document.querySelector("#dogs-list")
    dogList.innerHTML = ""


}


function renderDogToPage() {
    //  clearEventForm()
    clearList()
    clearPage()

    let dogList = document.querySelector("#dogs-list")
    fetch("http://localhost:3000/dogs")
        .then(resp => resp.json())
        .then(dogs => {
            
            dogs.forEach(dog => {
                let dg = new Dog(dog)
                dogList.innerHTML += dg.returnDogForm()
            })


            attachClickButton()

        })


}

function attachClickButton() {
    let newBtns = document.querySelectorAll(".new-btn")
    newBtns.forEach(newBtn => newBtn.addEventListener("click", renderEventForm))
    let buttonRecordViews = document.querySelectorAll(".view-events-dog-button")
    buttonRecordViews.forEach(buttonRecordView => buttonRecordView.addEventListener("click", showRecord))
    let buttonDeletes = document.querySelectorAll(".delete-dog-button")
    buttonDeletes.forEach(buttonDelete => buttonDelete.addEventListener("click", removeDogs))
    let sortButtons = document.getElementById("sort-button")
    sortButtons.addEventListener("click",sortout)
    

}

function sortout(){
    clearList()
    let dogList = document.querySelector("#dogs-list")
    fetch("http://localhost:3000/dogs")
    .then(response => response.json())
    .then(dogs => {
        dogs.forEach(dog => {

            dogList.innerHTML+= `<div class="card" data-dog-id="${dog.id}">
                
            </br></br>
            <strong class="dog-name">${dog.name}</strong> <br/>
            </div>`
        })
       
         

    })
    
   
    

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




function showRecord() {

    clearList()

    // let id = eventObject.target ? eventObject.target.parentElement.dataset.dogId : eventObject.dog_id 
    let id = event.target.parentElement.dataset.dogId

    fetch(`http://localhost:3000/dogs/${id}`)
        .then(response => response.json())
        .then(dog => {
            let eventList = dog.events.map(dogEvent => `<div class="card">
            </div>
            <div>
              <strong>Title: </strong>${dogEvent.title}<br/>
              <strong>Description: </strong>${dogEvent.description}<br/>
            </div>
            </div>`).join("")

            let dogList = document.querySelector("#dogs-list")

            dogList.innerHTML += `<div class="card" data-dog-id="${dog.id}">
                
                </br></br>
                <strong class="dog-name">${dog.name}</strong> <br/>
                  <strong>Age: </strong>${dog.age} years young <br/>
                 <strong>Sex: </strong>${dog.sex} <br/> 
                 <strong>Description: </strong>${dog.description}<br/>
                 <strong>Status: </strong>${dog.status}<br/>
                 ${eventList}
                </div>`

        })


}
class Dog {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.age = data.age
        this.sex = data.sex
        this.description = data.description
        this.status = data.status
    }
    returnDogForm() {
        return `<div class="card" data-dog-id="${this.id}">
   <button class="view-events-dog-button" style="background-color:blue">View Record</button>  
   <button class="delete-dog-button" style="background-color:red">Delete Dog</button>
   </br></br>
   <strong class="dog-name">${this.name}</strong> <br/>
     <strong>Age: </strong>${this.age} years young <br/>
    <strong>Sex: </strong>${this.sex} <br/>
    <button class="new-btn" style="background-color:goldenrod">Add Event</button>
   <div class="additional-info" style="display:none">     
    <strong>Description: </strong>${this.description}<br/>
    <strong>Status: </strong>${this.status}<br/>
 
 </div>
</div>`


    }

}