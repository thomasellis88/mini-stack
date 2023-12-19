async function getMessage() {
    const response = await fetch("https://mini-stack-8px2.onrender.com");

    const json = await response.json();

    const p = decument.getElementById("message");
    p.textContent = json.message;  
}

getMessage();