
$(() => {
    productById(1)
        .done((res) => {
            getProduct(res);
        });
});

const getProduct = (product) => {
   let tbody = $("#tbody");
   tbody.empty();
        let tr = $("<tr></tr>");
        $(`<td>${product.id}</td>`).appendTo(tr);
        $(`<td>${product.partNbr}</td>`).appendTo(tr);
        $(`<td>${product.name}</td>`).appendTo(tr);
        $(`<td>${product.price}</td>`).appendTo(tr);
        tr.appendTo(tbody);
   
}