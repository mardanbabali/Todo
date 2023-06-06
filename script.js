let list = [];
let listUl = document.getElementById('row');
const btn =document.getElementById("btn")
// function todo() {
    btn.addEventListener("click",()=>{
        let input = document.getElementById('input');
        let value = input.value.trim();
    
        if (value) {
            list.push(value);
            Display();
            input.value = "";
        } else {
            alert("Deyer daxil edin");
        }
    })
    // let input = document.getElementById('input');
    // let value = input.value.trim();

    // if (value) {
    //     list.push(value);
    //     Display();
    //     input.value = "";
    // } else {
    //     alert("Deyer daxil edin");
    // }
// }

function Delete(index) {
    list.splice(index, 1);
    Display();
}

function Display() {
    let data = "";
    for (let i = 0; i < list.length; i++) {
        data += `<li class="list-group-item d-flex justify-content-between">${list[i]} <button onclick="Delete(${i})" class="btn btn-danger btn-sm">Delete</button></li>`;
    }

    listUl.innerHTML = data;
}
