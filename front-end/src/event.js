function renderEventForm() {
    clearList()
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
    document.querySelector("form").addEventListener("submit", createEvent)


}

function createEvent(event) {
    event.preventDefault()

    renderDogToPage()


    let formEvent = {

        title: document.getElementById("title").value,
        description: document.getElementById("event-description").value,
        dog_id: document.getElementById("event-dogId").value

    }
    // let event = new Event(title,description)
    clearEventValue()

    fetch("http://localhost:3000/events", {
        method: "POST",
        body: JSON.stringify(formEvent),
        headers: {
            "Content-Type": "application/json", "Accept": "application/json"
        }
    }).then(response => response.json())
        .then(eventObject => {
            new Event(eventObject)


        })

    clearEventForm()
}

function clearEventForm() {

    eventForms = document.getElementById("event-form")
    eventForms.innerHTML = ""
}

function clearEventValue() {
    title = document.getElementById("title").value = ""
    description = document.getElementById("event-description").value = ""


}


class Event {

    constructor(event) {

        this.id = event.id
        this.title = event.title
        this.description = event.description


    }

    returnEvent() {
        return `<div class="card">
            </div>
            <div>
              <strong>Title: </strong>${this.title}<br/>
              <strong>Description: </strong>${this.description}<br/>
            </div>
            </div>`


    }

}