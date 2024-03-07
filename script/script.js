document.querySelector(".btn").addEventListener("click", function () {
    this.classList.add("btn-loading");
    this.classList.add("cursor-not-allowed");
    this.textContent = "Loading...";

    setTimeout(function () {
        document.querySelector(".btn").classList.add("opacity-5");
        document.querySelector(".btn").classList.remove("btn-loading");
        document.querySelector(".btn").setAttribute("disabled", "true");
        document.querySelector(".btn").textContent = "Submit";
    }, 2000);
});