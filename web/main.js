(function () {
  const textUI = document.querySelector(".text-ui");

  window.addEventListener("message", (evt) => {
    const { data } = evt;

    if (!data) return false;

    if (data.type === "show") {
      // If the string contains a key in square brackets (like [E]), then style it differently!
      let str = data.text.replaceAll(/\[(.*?)\]/g, "<kbd>$1</kbd>");

      textUI.style.left = "20px";
      textUI.innerHTML = str;
    } else if (data.type === "hide") {
      textUI.style.left = "-100%";
    }
  });
})();
