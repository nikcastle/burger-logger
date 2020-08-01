
$(function() {
    
    //TODO: build function to change devour

    $(".change-devour").on("click", function(event) {
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");

        const newDevourState = {
            devoured: newDevour
        }

        //TODO: Send the put request, use ajax call
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function(){
                console.log("Changed devour to ", newDevour);
                location.reload();
            }
        )

    })

    //TODO: build create burger form & function

    
    //TODO: build delete burger function







})
