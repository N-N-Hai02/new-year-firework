window.addEventListener("DOMContentLoaded", animate, false);
const textElement = document.getElementById('demo');
const textInput = document.querySelector('input')

function animate() {
    var text = textElement.innerHTML;
    text = text.replace(" ", "_")
    var len = text.length
    var wrapped = "";
    for (var i in text) {
        wrapped += '<span>' + text.charAt(i) + '</span>';
    }
    textElement.innerHTML = wrapped
    var delay = 0
    for (var i = 0; i < len; i++) {
        var childQuery = "#demo span:nth-child(" + (i + 1) + ")"
        document.querySelector(childQuery).style.animationDelay = delay + "s";
        delay += 0.25
    }

    document.querySelectorAll('#demo span').forEach(span => span.classList.add('animated'))
}

document.getElementById('button').addEventListener('click', function () {
    animate()
    if (textInput.value === "") {
        textElement.innerHTML = ""
    }
})

function updateInner() {
    textElement.innerHTML = textInput.value
}

// animate()