window.addEventListener("load", () => {
  const logo = document.querySelector(".logo");

  function runAnimation() {
    logo.style.transition = "none";
    logo.style.transform = "translate(-50%, -50%)";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        logo.style.transition = "transform 0.5s ease-in-out";
        logo.style.transform =
          "translate(-50%, -50%) translate(-40vw, -40vh) scale(0.3)";

        // setTimeout(() => {
        //   logo.style.transform =
        //     "translate(-50%, -50%) translate(-40vw, -40vh) scale(0.3)";
        // }, 4000);

        setTimeout(() => {
          logo.style.transition = "transform 0.3s ease-out";
          logo.style.transform =
            "translate(-50%, -50%) translate(-40vw, -40vh) scale(0.4)";
        }, 500);

        setTimeout(() => {
          logo.style.transition = "transform 0.3s ease-in";
          logo.style.transform =
            "translate(-50%, -50%) translate(-40vw, -40vh) scale(0.35)";
        }, 700);
      });
    });
  }
  runAnimation();

  setInterval(runAnimation, 17000);
});
