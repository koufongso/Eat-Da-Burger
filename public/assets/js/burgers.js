$(document).ready(function () {
    // submit button, added the burger to the database
    $("#btn-submit").on("click", function () {
        // call post method
        var name = $("#burger_name").val().trim();
        $.post("/api/burgers", { "burger_name": name}, function (res) {
            if (res.affectedRows==1){
                $("#waiting_list").append(`<li class="list-group-item" data-id=${res.insertId} data-devoured=${0}>${name}
                <button type="button" class="btn btn-success btn-sm float-sm-right btn-devour">Devour!</button>`);
            }else{
                alert("Opps, something is wrong. Please try agian.");
            }
        });
    });
});



