//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value;
    const delay = Number(document.getElementById("delay").value);
    let outputDiv = document.getElementById("output");

    if (!text || isNaN(delay) || delay < 0) {
        outputDiv.textContent = "Please enter valid text and a non-negative delay.";
        return;
    }

    outputDiv.textContent = "";

    await new Promise(resolve => setTimeout(resolve, delay));

    outputDiv.textContent = text;
});
