
let click = 0;

const allButtons = (e) => {
    const target = e.target;
    actionsButtons(target.id);
}

const principalButtons = () => {
    if (click >= 0 && click < 4) {
        click++;
    } else {
        click = 0;
    }
    actionsButtons('f' + (click));
}

const actionsButtons = (target) => {
    document.querySelectorAll('.color').forEach(element => {
        element.classList.remove("animate");
        element.classList.remove("a_pulse");
        element.classList.add("a_repeat-2");


        if (target == "f1") {
            if (element.classList[1] == "frase-1") {
                element.classList.add("f1");
                element.classList.add("animate");
                element.classList.add("a_pulse");
            }
            element.classList.remove("stateA");
            element.classList.remove("f2");
            element.classList.remove("f3");
            element.classList.remove("f4");

        } else if (target == "f2") {

            if (element.classList[1] == "frase-2") {
                element.classList.add("f2");
                element.classList.add("animate");
                element.classList.add("a_pulse");
            }
            element.classList.remove("stateA");
            element.classList.remove("f1");
            element.classList.remove("f3");
            element.classList.remove("f4");

        } else if (target == "f3") {

            if (element.classList[1] == "frase-3") {
                element.classList.add("f3");
                element.classList.add("animate");
                element.classList.add("a_pulse");
            }
            element.classList.remove("stateA");
            element.classList.remove("f1");
            element.classList.remove("f2");
            element.classList.remove("f4");

        } else if (target == "f4") {
            if (element.classList[1] == "frase-4") {
                element.classList.add("f4");
                element.classList.add("animate");
                element.classList.add("a_pulse");
            }
            element.classList.remove("stateA");
            element.classList.remove("f1");
            element.classList.remove("f2");
            element.classList.remove("f3");

        } else if (target == "reset") {
            if (element.classList[2] == "a") {
                element.classList.add("stateA");
                element.classList.add("animate");
                element.classList.add("a_pulse");
            }
            element.classList.remove("f1");
            element.classList.remove("f2");
            element.classList.remove("f3");
            element.classList.remove("f4");
        }
    });
}


document.getElementById("buttons").addEventListener("click", allButtons);
document.getElementById("buttons-alls-text").addEventListener("click", principalButtons);
actionsButtons('reset');




scroll(
    (progress) => {
        if (progress != 0 || progress != 1) {
            if (progress >= 0 && progress < 0.33) {
                actionsButtons('f1');
            } else if (progress >= 0.33 && progress < 0.66) {
                actionsButtons('f2');
            } else if (progress >= 0.66 && progress < 1) {
                actionsButtons('f3');
            }
        }
    },
    { target: document.getElementById("text-contents"), offset: ["start end", "end start"] }
)