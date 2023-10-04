

$(() => {
    productList()
        .done((res) => {
            getAllProducts(res);
        });
});

const getAllProducts = (products) => {
   let tbody = $("#tbody");
   tbody.empty();
   for(let p of products){
        let tr = $("<tr></tr>");
        $(`<td>${p.id}</td>`).appendTo(tr);
        $(`<td>${p.partNbr}</td>`).appendTo(tr);
        $(`<td>${p.name}</td>`).appendTo(tr);
        $(`<td>${p.price}</td>`).appendTo(tr);
        let a1 = $(`<a href='get-product.html?id=${p.id}'>Detail</a>`);
        let sep = $("<span> | </span>");
        let a2 = $(`<a href='put-products.html?id=${p.id}'>Edit</a>`);
        let tda = $("<td></td>")
        tda.append(a1);
        tda.append(sep);
        tda.append(a2);
        tr.append(tda);
        tr.appendTo(tbody);
   }
}