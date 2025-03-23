function checkClue() {
    let input = document.getElementById("clueInput").value;
    let taskDiv = document.getElementById("task");
    taskDiv.innerHTML = "";

    if (input === "KEY123") {
        window.location.href = "debugging_code.html";
    } else if (input === "DEBUG") {
        window.location.href = "debugging_code.html";
    } else if (input === "TECHCODE") {
        window.location.href = "techcode_task.html";
    } else {
        alert("Wrong Clue! Try again.");
    }
}
