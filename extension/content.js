async function waitForElement(selector, timeout = 10000) {
    return await new Promise((resolve) => {
        const startTime = Date.now();

        const checkElement = () => {
            const element = document.querySelector(selector);

            if (element) {
                resolve(element);
                return;
            }

            if (Date.now() - startTime >= timeout) {
                resolve(null);
                return;
            }

            requestAnimationFrame(checkElement);
        };

        checkElement();
    });
}

window.addEventListener("load", async () => {
    const button = document.createElement("button");
    button.classList.add("habitica-priority-matrix-btn");
    button.textContent = "Priority Matrix";
    button.onclick = () => {
        window.location.href = "https://nietsuki.github.io/habitica-priority-matrix/";
    };

    const container = await waitForElement(".tasks-navigation");
    container.insertBefore(button, container.children[1]);
});
