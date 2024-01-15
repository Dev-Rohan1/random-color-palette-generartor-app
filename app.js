const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn button");
const maxPaletteBoxes = 12;

const generatePalette = () => {
  container.innerHTML = "";
  for (let i = 0; i < maxPaletteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .toUpperCase();
    randomHex = `#${randomHex.padStart(6, "0")}`;

    const reactBox = document.createElement("div");
    reactBox.classList.add("react-box");
    reactBox.innerHTML = `<div class="color" style="background-color: ${randomHex};"></div>
                          <span class="hex-value">${randomHex}</span>`;
    reactBox.addEventListener("click", () => copyColor(reactBox, randomHex));
    container.appendChild(reactBox);
  }
};
generatePalette();

const copyColor = (element, hexVal) => {
  const colorElement = element.querySelector(".hex-value");
  navigator.clipboard.writeText(hexVal).then(() => {
    colorElement.innerText = "Copied";
    setTimeout(() => {
      colorElement.innerText = hexVal;
    }, 1000);
  });
};

refreshBtn.addEventListener("click", generatePalette);
