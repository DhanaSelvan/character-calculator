var input = document.getElementById('input')

setInterval(() => {
    var value = input.value.trim();
    value = value.replaceAll(" ", "")
    document.getElementById('value').innerHTML = value.length;
}, 500);