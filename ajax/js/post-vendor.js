//GET vendorS BY ID
const postVendor = (vendor) => {
    console.log("postVendor()");
    $.ajax({
        method: "POST",
        url: `http://localhost:2222/api/vendors`,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
    .done((res) => {
        console.log("Post successful", res);
    });

}

const getDataFromHtml = () => {
    let vendor = {};
    vendor.id = 0;
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
    postVendor(vendor);
}

const loaded = () => {
}

const display = (vendor) => {
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


