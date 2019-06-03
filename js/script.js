function toggleVisibility(e) {
    var e = document.getElementById(e);
    if(e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

document.getElementById("button--id").addEventListener("click", toggleVisibility);