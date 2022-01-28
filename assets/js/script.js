//Call Giphy  API with jQuery ajax 
function getGifs() {
    let searchInput = $("#searchInput").val();
    
    const apiKey = "3DWffnfEL2zjFdPhKRbDF7n4nCd0it1M"; 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchInput + "&" + "api_key=" + apiKey + "&limit=12";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .done(function(response){
        var dataArray = response.data;
        console.log(response);

        $("#gifPanel").empty();

        for (var i=0; i < dataArray.length; i++) {
            var newDiv = $("<div>");            
            newDiv.addClass("col");

            // var newRating = $("<h2>").html("Rating: " + dataArray[i].rating);
            // newDiv.append(newRating);

            var newImg = $("<img>");
            newImg.addClass("m-4");
            newImg.attr("src", dataArray[i].images.original.url);
            newImg.attr("id", "gif");                        

            
            newDiv.append(newImg);

            //Append gifs to gifPanel
            $("#gifPanel").append(newDiv);        
        }
    });
}

// Handle button click to fetch gifs
$(document).on("click", "#searchButton", getGifs);

//Search on enter
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        getGifs();
    }
});