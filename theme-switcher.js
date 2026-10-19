(() => {
  "use strict";

  const root = document.documentElement;
  const buttons = [...document.querySelectorAll(".header__theme-menu-button")];
  const activeClass = "header__theme-menu-button_active";
  const allowedThemes = new Set(["dark", "light", "auto"]);

  function setTheme(theme) {
    if (!allowedThemes.has(theme)) {
      return;
    }

    root.classList.remove("theme-dark", "theme-light", "theme-auto");
    root.classList.add(`theme-${theme}`);

    buttons.forEach((button) => {
      const isActive = button.dataset.theme === theme;
      button.classList.toggle(activeClass, isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setTheme(button.dataset.theme);
    });
  });

  const initialTheme = [...allowedThemes].find((theme) =>
    root.classList.contains(`theme-${theme}`)
  ) || "auto";

  setTheme(initialTheme);
})();
