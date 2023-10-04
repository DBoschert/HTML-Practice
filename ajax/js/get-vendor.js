$(() => {
    console.log("Ready!");
    let data = document.URL.split("?")[1]
    let id = +data.split("=")[1];
    getVendor(id);
    //points to the button where the 'remove' id is located, the first parameter means do an event and the second one is the click event then the second one is remove
    $("#remove").on("click", () => {
        remove();
    }); 
});


let vendor = null;

const getVendor = (id) => {
    $.getJSON(`http://localhost:2222/api/vendors/${id}`)
        .done( (res) => {
            vendor = res;
            console.log(res);
            display(res);
        })
        .fail( (err) => {
            console.error(err);
        });
}

const display = (vendor) => {
    document.getElementById("pid").innerText = vendor.id;
    document.getElementById("pcode").innerText = `${vendor.code}`;
    document.getElementById("pname").innerText = vendor.name;
    document.getElementById("paddress").innerText = vendor.address;
    document.getElementById("pcity").innerText = vendor.city;
    document.getElementById("pstate").innerText = `${vendor.state}`;
    document.getElementById("pzip").innerText = `${vendor.zip}`;
    document.getElementById("pphone").innerText = `${vendor.phone}`;
    document.getElementById("pemail").innerText = `${vendor.email}`;

}

const remove = () => {
    let http = new XMLHttpRequest();
    
    http.responseType = "json";
    
    http.open("DELETE", `http://localhost:2222/api/vendors/${vendor.id}`, true);
    
    http.onload = function(){
        console.log(http.response);
    }
    http.send();
    document.location = "get-vendors.html";
}