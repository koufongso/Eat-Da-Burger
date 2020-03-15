$(document).ready(function () {
    // submit button, added the burger to the database
    $("#btn-submit").on("click", function () {
        console.log("hit!")
        // call post method
        $.post("/api/burgers", { "burger_name": $("#burger_name").val().trim() }, function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    });
});



