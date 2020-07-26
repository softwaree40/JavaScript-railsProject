class Event{
  
 constructor(title,description){
  
  this.title = title
  this.description = description

 }
  static renderEventForm() {
    
    let dogId = event.target.parentElement.dataset.dogId
    let eventForms = document.getElementById("event-form")
    
    let html = `<form>
     <label><strong>Title: </strong></label><br/>
    <input type="text" id="title"><br/>
    <input type="hidden" id="event-dogId" value=${dogId}>
    <label><strong>Description:   </strong></label><br/>
    <input type="text" id="event-description"><br/>  
    <input type="submit" value="Submit" style="color:white;background-color:orange">
    </form>
    `
    eventForms.innerHTML = html
    document.querySelector("form").addEventListener("submit", Event.createEvent)
   
    clearList()
}

  static createEvent(event){

    event.preventDefault()
    let formEvent = {

        title: document.getElementById("title").value,
        description: document.getElementById("event-description").value,
        dog_id: document.getElementById("event-dogId").value

    }

    

    fetch("http://localhost:3000/events", {
        method: "POST",
        body: JSON.stringify(formEvent),
        headers: {
            "Content-Type": "application/json", "Accept": "application/json"
        }
    }).then(response => response.json())
        .then(eventObject => {
            
           renderEvent(eventObject.id)
            
        })
        clearList()
        Event.clearEventValue()
       
  }

  static renderEvent(id){
    fetch(`http://localhost:3000/events/${id}`)
    .then(response =>response.json())
    .then(eventData =>{
        let eventList = document.querySelector("#event-form")
        eventList.innerHTML="" 
        let dogList = document.querySelector("#dogs-list")
    
        dogList.innerHTML+= `<div class="card">
            </div>
            <div>
              <strong>Title: </strong>${eventData.title}<br/>
              <strong>Description: </strong>${eventData.description}<br/>
            </div>
            </div>`



    })
    
    
  }

  static clearEventValue() {
    title = document.getElementById("title").value=""
    description = document.getElementById("event-description").value=""
}
}
let event = new Event(title,description)






// function clearEventValue() {
//     title = document.getElementById("title").value=""
//     description = document.getElementById("event-description").value=""


// }


// function renderEvent(id){
    
//     // fetch(`http://localhost:3000/events/${id}`)
//     // .then(response =>response.json())
//     // .then(eventData =>{
//     //     let eventList = document.querySelector("#event-form")
//     //     eventList.innerHTML="" 
//     //     let dogList = document.querySelector("#dogs-list")
    
//     //     dogList.innerHTML+= `<div class="card">
//     //         </div>
//     //         <div>
//     //           <strong>Title: </strong>${eventData.title}<br/>
//     //           <strong>Description: </strong>${eventData.description}<br/>
//     //         </div>
//     //         </div>`



//     // })
    
    


 
// }

