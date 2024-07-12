$(document).ready(function(){
     $(".table_of_content").waypoint(function(){
        $(".table_of_content").addClass("animate__animated animate__bounceInUp");
    },{offset:"50%"});
});
$(document).ready(function(){
    $("#ani1").waypoint(function(){
       $("#ani1").addClass("animate__animated animate__fadeInRight");
   },{offset:"50%"});
});
$(document).ready(function(){
    $("#ani2").waypoint(function(){
       $("#ani2").addClass("animate__animated animate__fadeInUp");
   },{offset:"50%" });
});
$(document).ready(function(){
    $("#ani3").waypoint(function(){
       $("#ani3").addClass("animate__animated animate__fadeInDown");
   },{offset:"50%"});
});


