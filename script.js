document.querySelector("#front-color").value = "#67a4f3";
document.querySelector("#back-color").value = "#f3bb67";
document.querySelector("#text-color").value = "#333";
var cardNumber = 0;

function submitForm() {
    // adding card number
    cardNumber += 1;

    // fetching data from the form
    var titleValue = document.getElementById("title").value;
    var descriptionValue = document.getElementById("description").value;
    var data = {
        title: titleValue,
        description: descriptionValue,
    };
    console.log(data, "\nOne card created");

    // creating a new card (clone from template)
    var template = document.querySelector("#card-template");
    var clone = template.content.cloneNode(true);
    clone.querySelector(".card-title").textContent = data.title;
    clone.querySelector(".card-text").textContent = data.description;

    // adding specific class name to the card
    clone.querySelector(".thecard").classList.add(`thecard-${cardNumber}`);

    // adding card style by user request from the form
    clone.querySelector(".thefront").style.backgroundColor = document.querySelector("#front-color").value;
    clone.querySelector(".theback").style.backgroundColor = document.querySelector("#back-color").value;
    clone.querySelector(".card-text").style.color = document.querySelector("#text-color").value;
    clone.querySelector(".card-title").style.color = document.querySelector("#text-color").value;

    // apply all change to the page
    document.querySelector("#card-place").append(clone);
}

function downloadPage() {
    var html = document.documentElement.outerHTML;
    var blob = new Blob([html], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");

    var titleValue = document.getElementById("title").value;

    a.download = `Flash Card ${titleValue}.html`;
    a.href = url;
    a.click();
}
