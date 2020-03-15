$(document).ready(function () {
    // submit button, added the burger to the database

    $("#btn-submit").on("click", function () {
        // call post method
        var name = $("#burger_name").val().trim();
        $.ajax("/api/burgers", { type: "POST", data: { "burger_name": name } })
            .then(function (res) {
                if (res.affectedRows == 1) {
                    $("#waiting_list").append(`<li class="list-group-item" data-id=${res.insertId} data-name="${name}">${name}
                    <button type="button" class="btn btn-success btn-sm float-sm-right btn-devour">Devour!</button>`);
                } else {
                    alert("Opps, something is wrong. Please try agian.");
                }
            });
    });


    $(document).on("click", ".btn-devour", function () {
        // update devoure state
        var item = $(this).parent();
        var name = $(item).attr("data-name");
        var id = $(item).attr("data-id");
        $.ajax(`/api/burgers/${id}`, { type: "PUT" })
            .then(function (res) {
                // console.log(data);
                if(res.affectedRows==1){
                    $(item).remove();
                    $("#devoured_list").append(`<li class="list-group-item" data-id=${id} data-name="${name}">${name}</li>`);
                }else {
                    alert("Opps, something is wrong. Please try agian.");
                }
            });
    });
});



