function refresh() {
    var context = document.getElementById("texteditor").value;
    document.getElementById("viewer").srcdoc = context;
}
function changefont()
{
	var fontsize = document.getElementById('font-size').value;
    fontsize += "px";
    document.getElementById("texteditor").style.fontSize = fontsize;
}
