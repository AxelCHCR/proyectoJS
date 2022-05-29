//Slider
$(document).ready(function(){

    if(window.location.href.indexOf("index") > -1){
    $(".galeria").bxSlider({
        mode:"fade",
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: false

    });
    }
    


//Posts 
if(window.location.href.indexOf("index") > -1){
var posts = [
    {
        title: "Prueba de título  1",
        date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    },
    {
        title: "Prueba de título  2",
        date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    },
    {
        title: "Prueba de título  3",
        date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    },
    {
        title: "Prueba de título  4",
        date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    },
    {
        title: "Prueba de título  5",
        date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    },
    {
        title: "Prueba de título  6",
        date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    }

];
posts.forEach((item, index) =>{
    var post = `
    <article class ="post">
<h2>${item.title}</h2>
<span class = "date">${item.date}</span>
<p>
<p>${item.content}</p>
</p>
<a href = "#" class = "buttonMore">Leer más</a>
</article>
    `;
    $("#posts").append(post);
});
}
//Selector de tema
var theme = $("#theme");
$("#toGreen").click(function(){
    theme.attr("href", "css/green.css");
});
$("#toBlue").click(function(){
    theme.attr("href", "css/blue.css");
});
$("#toRed").click(function(){
    theme.attr("href", "css/red.css");
});

//Scroll arriba de la web
$(".subir").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});
//Login falso
$("#login form").submit(function(){
    var formName = $("#formName").val();

    localStorage.setItem("formName", formName);
});
var formName = localStorage.getItem("formName");
if(formName != null && formName != "undefined"){
    var aboutParrafo = $("#about p");
    aboutParrafo.html("<br/><strong>Bienvenido, " + formName + "</strong>");
    aboutParrafo.append("<a href = '#' id='logout'> Cerrar Sesión</a>");
    $("#login").hide();
    $("#logout").click(function(){
        localStorage.clear();
        location.reload();
    });
}
//Acordeón
if(window.location.href.indexOf("about") > -1){
    $("#acordeon").accordion();
}
//reloj
if(window.location.href.indexOf("reloj") > -1){
    setInterval(function(){

        var reloj = moment().format("HH:mm:ss");
        $("#reloj").html(reloj);   
    }, 1000);

}
});
