
//Use ON on parent element to listen to every new li
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
    
})

//Click X to remove
// On click to parent 
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, () => {
        $(this).remove();
    });
    event.stopPropagation();
});

// Get input 
$("input[type='text']").keypress(function(event) {
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val(""); 
        //Push input to li   
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});


$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
});