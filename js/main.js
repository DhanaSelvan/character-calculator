var input = document.getElementById('input')

setInterval(() => {
    var value = input.value.trim();
    value = value.replaceAll(" ", "")
    var length = value.length;
    var rem = 50-length;
    document.getElementById('value').innerHTML = length;
    document.getElementById('rem').innerHTML = rem;
    if(rem<0){
        alert("Yo reached the limit");
    }
}, 500);