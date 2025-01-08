function toggleStyle() {
    var stylesheetLink = document.getElementById("stylesheet");
    var currentStyle = stylesheetLink.getAttribute("href");
    console.log(currentStyle);
    if (currentStyle === "style.css") {
        currentStyle = "style2.css";
    } else {
       currentStyle = "style.css"
    }

    stylesheetLink.setAttribute('href', currentStyle);

    localStorage.setItem("currStyle", currentStyle);
}

window.onload = function() {
    var currStyle = localStorage.getItem("currStyle");
    if (currStyle){
        var stylesheet = document.getElementById("stylesheet");
        stylesheet.setAttribute('href', currStyle);
    }
}
