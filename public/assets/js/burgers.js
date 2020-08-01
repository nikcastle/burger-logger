$(function () {

    //function to change devour status
    $(".change-devour").on("click", function (event) {
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");

        const newDevourState = {
            devoured: newDevour
        }

        //Send the put request, use ajax call
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("Changed devour to ", newDevour);
                location.reload();
            }
        )

    })

    //create burger form & function
    $(".create-form").on("click", function (event) {
        event.preventDefault();

        const newBurger = {
            name: $("#burg").val().trim(),
            // devoured: $("[name=devoured]:checked").val().trim();
        };

        //Send the Post request
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");
            location.reload();
        });

    });


    //delete burger function
    $(".delete-burger").on("click", function (event) {
        const id = $(this).data("id");

        //Send ajax delete call
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Deleted Burger #" + id);
                location.reload();
            }
        );

    });

})