$(() => {
    getVendors();

});


//GET ALL Vendors
const getVendors = () => {
    
    $.getJSON("http://localhost:2222/api/vendors")
        .done( (res) => {
            console.log(res);
            display(res);
        })
        .fail( (err) => {
            console.error(err);
        });

}

const display = (vendors) => {
    let tbody = $("#tbody");
    tbody.empty();
    
    // Creates a table that will change with the data
    for(let v of vendors){
        let tr = $("<tr></tr>"); //this is an object not a string
        tr.append( $(`<td>${v.id}</td>`) );
        tr.append( $(`<td>${v.code}</td>`) );
        tr.append( $(`<td>${v.name}</td>`) );
        tr.append( $(`<td>${v.address}</td>`) );
        tr.append( $(`<td>${v.city}</td>`) );
        tr.append( $(`<td>${v.state}</td>`) );
        tr.append( $(`<td>${v.zip}</td>`) );
        tr.append( $(`<td>${v.phone}</td>`) );
        tr.append( $(`<td>${v.email}</td>`) );
        let a1 = $(`<a href='get-vendor.html?id=${v.id}'>Detail</a>`); // come back to this
        let sep = $("<span> | </span>");
        let a2 = $(`<a href='put-vendor.html?id=${v.id}'>Edit</a>`); // come back to this
        let tda = $("<td></td>")
        tda.append(a1);
        tda.append(sep);
        tda.append(a2);
        tr.append(tda);
        tbody.append(tr);
    }
    
}

