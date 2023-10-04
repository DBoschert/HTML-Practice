
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

const putVendor = (vendor) => {
    console.log("putVendor()");
    $.ajax({
        method: "PUT",
        url: `http://localhost:2222/api/vendors/${vendor.id}`,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
    .done((res) => {
        console.log("Put successful", res);
    });
}

const getDataFromHtml = () => {
    let vendor = {};
    vendor.id = +document.getElementById("pid").value;;
    vendor.code = document.getElementById("pcode").value;
    vendor.name = document.getElementById("pname").value;
    vendor.address = document.getElementById("paddress").value;
    vendor.city = document.getElementById("pcity").value;
    vendor.state = document.getElementById("pstate").value;
    vendor.zip = document.getElementById("pzip").value;
    vendor.phone = document.getElementById("pphone").value;
    vendor.email = document.getElementById("pemail").value;
    return vendor;

}

const save = () => {
    let vendor = getDataFromHtml();
    putVendor(vendor);
}

const loaded = () => {
    let data = document.URL.split("?")[1]
    let id = +data.split("=")[1];
    getVendor(id);
}

const display = (vendor) => {
    // could also do it this way: $("#pid").val(vendor.id);
    document.getElementById("pid").value = vendor.id;
    document.getElementById("pcode").value = `${vendor.code}`;
    document.getElementById("pname").value = vendor.name;
    document.getElementById("paddress").value = vendor.address;
    document.getElementById("pcity").value = vendor.city;
    document.getElementById("pstate").value = `${vendor.state}`;
    document.getElementById("pzip").value = `${vendor.zip}`;
    document.getElementById("pphone").value = `${vendor.phone}`;
    document.getElementById("pemail").value = `${vendor.email}`;

}


