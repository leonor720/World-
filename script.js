let visited = 0;

function toggle(button) {

    if (button.classList.contains("visited")) {

        button.classList.remove("visited");

        visited--;

    } else {

        button.classList.add("visited");

        visited++;

    }

    document.getElementById("counter").innerText =

        visited + " von 3 Ländern besucht";

}
