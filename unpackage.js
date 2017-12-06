// READ the giphy API docs: https://developers.giphy.com/
const giphy_endpoint = 'http://api.giphy.com/v1/gifs'

//obtain the giphy api ket at developer.giphy.com
var giphy_api_key = "22J4Uh2nveN6KUnSNGplUXzcrjjjluk2"

function getGifs(term, path, callback){
    
   $.ajax({
        type: "GET", /*Default is GET*/
        url: `${giphy_endpoint}/${path}?api_key=${giphy_api_key}&q=${term}`,
        dataType: "json",
        success: function(data){
            console.log(data)
            // console.log(data.pagination)
            console.log(data.data[10].username)
            console.log(data.data[20].images.original.height)
            
        },
        error: function(error){
            console.log("There was an error")
        }
    })
}

getGifs("fruits", "search", function(){})

$.ajax({/*type: e.g(GET, PUSH, DELETE), url:, dataType: e.g(json, xml), success: function(data), error: function(error)*/})