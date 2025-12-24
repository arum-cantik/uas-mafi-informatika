let siblings = [];

function addSibling() {
    let input = document.getElementById("siblingName");
    let name = input.value;

    if (name === "") {
        alert("Nama saudara tidak boleh kosong!");
        return;
    }

    siblings.push(name);
    input.value = "";

    tampilkanSiblings();
}

function tampilkanSiblings() {
    let list = document.getElementById("siblingsList");
    list.innerHTML = "";

    siblings.forEach(function(sibling) {
        let li = document.createElement("li");
        li.textContent = sibling;
        list.appendChild(li);
    });
}