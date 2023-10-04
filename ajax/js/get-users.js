$(() => {
    getUsers();

});


//GET ALL USERS
const getUsers = () => {
    
    $.getJSON("http://localhost:2222/api/users")
        .done( (res) => {
            console.log(res);
            display(res);
        })
        .fail( (err) => {
            console.error(err);
        });

}

const display = (users) => {
    let tbody = $("#tbody");
    tbody.empty();
    
    // Creates a table that will change with the data
    for(let u of users){
        let tr = $("<tr></tr>");
        tr.append( $(`<td>${u.id}</td>`) ); //puts in between tr tags by using append
        tr.append( $(`<td>${u.firstname} ${u.lastname}</td>`) );
        tr.append( $(`<td>${u.username}</td>`) );
        tr.append( $(`<td>${u.phone}</td>`) );
        tr.append( $(`<td>${u.isReviewer ? 'Yes' : 'No'}</td>`) );
        tr.append( $(`<td>${u.isAdmin ? 'Yes' : 'No'}</td>`) );
        let a1 = $(`<a href='get-user.html?id=${u.id}'>Detail</a>`);
        let sep = $("<span> | </span>");
        let a2 = $(`<a href='put-user.html?id=${u.id}'>Edit</a>`);
        let tda = $("<td></td>")
        tda.append(a1);
        tda.append(sep);
        tda.append(a2);
        tr.append(tda);
        tbody.append(tr);
    }
    
}

