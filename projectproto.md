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