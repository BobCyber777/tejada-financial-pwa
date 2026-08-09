const openSite = document.getElementById("openSite");

if (openSite) {
    openSite.addEventListener("click", function () {
        window.location.href = "https:" + String.fromCharCode(47,47) + "bank-project-1-q95z.onrender.com";
    });
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
        .catch(function (error) {
            console.error("Service worker registration failed:", error);
        });
}
