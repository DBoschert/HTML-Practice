//GET USER BY ID
$(() => {
    console.log("Ready!");
    let data = document.URL.split("?")[1]
    let id = +data.split("=")[1];
    getUser(id);
    //points to the button where the 'remove' id is located, the first parameter means do an event and the second one is the click event then the second one is remove
    $("#remove").on("click", () => {
        remove();
    }); 
});


let user = null;

const getUser = (id) => {
    $.getJSON(`http://localhost:2222/api/users/${id}`)
        .done( (res) => {
            user = res;
            console.log(res);
            display(res);
        })
        .fail( (err) => {
            console.error(err);
        });
}

//get by id
// const loaded = () => {
//     let data = document.URL.split("?")[1]
//     let id = +data.split("=")[1];
//     getUser(id);
// }

const display = (user) => {
    document.getElementById("pid").innerText = user.id;
    document.getElementById("pname").innerText = `${user.firstname} ${user.lastname}`;
    document.getElementById("pusername").innerText = user.username;
    document.getElementById("ppassword").innerText = user.password;
    document.getElementById("pphone").innerText = user.phone;
    document.getElementById("previewer").innerText = `${user.isReviewer ? 'YES' : 'NO'}`;
    document.getElementById("padmin").innerText = `${user.isAdmin ? 'YES' : 'NO'}`;

}

const remove = () => {
    let http = new XMLHttpRequest();
    
    http.responseType = "json";
    
    http.open("DELETE", `http://localhost:2222/api/users/${user.id}`, true);
    
    http.onload = function(){
        console.log(http.response);
    }
    http.send();
    document.location = "get-users.html";
}