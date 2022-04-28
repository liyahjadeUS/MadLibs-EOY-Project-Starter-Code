let storiesCreated; 

$(".submit").click(function() {
    let name = $(".name-input").val();
    let transportation = $(".transport-input").val();
    let adj = $(".adjective-input").val();
    let number = $(".number-input").val();
    $(".story").append("One day my friend " + name + " and I decided to take a trip to the beach, so we packed our bags and took the " + transportation + " over. It was a " + adj + "say at the beach! We ended up staying for " + number +" hours!");
});

