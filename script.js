$(".results").click(function(){
    var age = $(".age").val(); 
    var time = $(".time").val();
        if(age <18 && time === "Day" ) {   
            $("h3").text("Theo Putnam");
        }else if(age <18 && time === "Night") {
            $("h3").text("Rosalind Walker");
        }else if(age >18 && time === "Day") {
            $("h3").text("Harvey Kinkle");
        }else if(age >18 && time === "Night") {
            $("h3").text("Sabrina Spellman");
        }else{
            $("h3").text("Oops! Something went wrong.");
        }

});