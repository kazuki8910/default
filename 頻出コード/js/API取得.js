// 後で調べる async await fetch プロミスオブジェクト

// DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");


// 関数（メソッド）
function addlist (user){
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
}

async function getUsers(){
    const res = await fetch("http://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return users;
}

async function listUsers(){
    // データのやり取り
    const users = await getUsers();

    // DOM操作
    users.forEach(addlist);
}


// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);
