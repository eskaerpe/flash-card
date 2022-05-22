document.querySelector("#front-color").value = "#67a4f3";
document.querySelector("#back-color").value = "#f3bb67";
document.querySelector("#text-color").value = "#333";
var cardNumber = 0;

function submitForm() {
    cardNumber += 1;
    var titleValue = document.getElementById("title").value;
    var descriptionValue = document.getElementById("description").value;
    var data = {
        title: titleValue,
        description: descriptionValue,
    };
    console.log(data, "\nOne card created");

    var template = document.querySelector("#card-template");
    var clone = template.content.cloneNode(true);
    clone.querySelector(".card-title").textContent = data.title;
    clone.querySelector(".card-text").textContent = data.description;

    clone.querySelector(".thecard").classList.add(`thecard-${cardNumber}`);

    clone.querySelector(".thefront").style.backgroundColor = document.querySelector("#front-color").value;
    clone.querySelector(".theback").style.backgroundColor = document.querySelector("#back-color").value;
    clone.querySelector(".card-text").style.color = document.querySelector("#text-color").value;
    clone.querySelector(".card-title").style.color = document.querySelector("#text-color").value;
    document.querySelector("#card-place").append(clone);
}
