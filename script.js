const keys = [
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  ];
  
  function getRandomKey() {
    const index = Math.floor(Math.random() * keys.length);
    return keys[index];
  }
  
  function highlightRandomKey() {
    const current = document.querySelector(".selected");
    if (current) current.classList.remove("selected");
  
    const newKey = document.getElementById(getRandomKey());
    if (newKey) newKey.classList.add("selected");
  }
  
  highlightRandomKey();
  
  document.addEventListener("keydown", (event) => {
    const pressedKey = event.key.toUpperCase();
    const keyElement = document.getElementById(pressedKey);
    const selected = document.querySelector(".selected");
  
    if (!keyElement) return;
  
    keyElement.classList.add("hit");
  
    keyElement.addEventListener(
      "animationend",
      () => {
        keyElement.classList.remove("hit");
      },
      { once: true }
    );
  
    if (keyElement === selected) {
      selected.classList.remove("selected");
      setTimeout(highlightRandomKey, 300);
    }
  });
  