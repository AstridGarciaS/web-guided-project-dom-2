console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector("#launchButton");
const confirmButton = document.querySelector("#confirmButton");
const cancelButton = document.querySelector("#cancelButton");

// B- MESSAGES
const successMessage = document.querySelector(".success");
const failureMessage = document.querySelector(".failure");

// C- MODAL
const modal = document.querySelector(".modal");


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute

launchButton.onclick = function(){
    console.log("Oh noes, what happened to the HTML event?!");
}
//  C- element.addEventListener('click', callback)
launchButton.addEventListener("click", function(evt){
    console.log(`
    event type: ${evt.type}
    event target: ${evt.target.nodeName}
    `)
})

Arrsy.from(document.links).forEach(link => {
    link.addEventListener("click", e => {
        console.log(`The ${e.target.textContsnt} link is not taking you anywhere....`);
        e.preventDefult();
    })
})
// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
function launch(){
    modal.classList.remove("off");
}
launchButton.addEventListener("click", launch);
// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function confirm(){
    modal.classList.add("off");
    successMessage.classList.removel("off");
}
confirmButton.addEventListener("click", confirm);


// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function cancel(){
    modal.classList.add("off");
    failureMessage.classList.removel("off");
}
cancelButton.addEventListener("click", cancel);
// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.

function esckey(event){
    if (event.key === "escape"){
        modal.classList.add("off");
    }
}
document.addEventListener("keydown", esckey);
// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.

document
.querySelector("*")
.forEach(elem => elem.addEventListener("click", event => {
    console.log("🎯 target:     ", event.target);
    console.log("🧭current target:", event.currentTarget);
    console.log("\n")
}))

modal.addEventListener("click", evt =>{
    console.log("YOU SHALL NOT PASS!");
    evt.stopPropagation();
})
// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mousemove event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
