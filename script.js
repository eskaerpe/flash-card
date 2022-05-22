function submitForm() {
    var titleValue = document.getElementById("title").value;
    var descriptionValue = document.getElementById("description").value;
    var data = {
        title: titleValue,
        description: descriptionValue,
    };
    console.log(data);

    var template = document.querySelector("#card-template");
    var clone = template.content.cloneNode(true);
    clone.querySelector(".card-title").textContent = data.title;
    clone.querySelector(".card-text").textContent = data.description;
    document.querySelector("#card-place").append(clone);
}
