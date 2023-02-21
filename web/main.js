(function () {
  const textUI = document.querySelector(".text-ui");

  window.addEventListener("message", (evt) => {
    const { data } = evt;

    if (!data) return false;

    if (data.type === "show") {
      textUI.style.left = "20px";
      textUI.innerHTML = data.text;
    } else if (data.type === "hide") {
      textUI.style.left = "-100%";
    }
  });
})();
