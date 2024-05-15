class colorChange {
  constructor() {
    //Base
    this.defauldColor = "#F2F2F2";
    this.container = document.getElementById("container");

    //PartOne
    this.rangeOne = document.getElementById("rangeOne");
    this.rangeTwo = document.getElementById("rangeTwo");
    this.rangeThree = document.getElementById("rangeThree");

    //PartTwo
    this.inputSelect = document.getElementById("inputSelect");
    this.colorSelect = document.getElementById("colorSelect");
    this.inputBtn = document.getElementById("inputBtn");

    //PartThree
    this.inputColor = document.getElementById("inputColor");

    //SetFunctions
    this.inputSelect.addEventListener("change", this.selectFormat.bind(this));
    this.inputBtn.addEventListener("click", this.randomHex.bind(this));
    this.inputColor.addEventListener("input", this.interChange.bind(this));
    this.rangeOne.addEventListener("input", this.getColorsRange.bind(this));
    this.rangeTwo.addEventListener("input", this.getColorsRange.bind(this));
    this.rangeThree.addEventListener("input", this.getColorsRange.bind(this));
  }

  getColorsRange() {
    let r = this.rangeOne.value;
    let g = this.rangeTwo.value;
    let b = this.rangeThree.value;

    if (this.inputSelect.selectedIndex == 1) {
      this.colorSelect.textContent = `RGB(${r}, ${g}, ${b})`;
      this.container.style.background = `RGB(${r}, ${g}, ${b})`;
    } else if (this.inputSelect.selectedIndex == 2) {
      this.colorSelect.textContent = this.getHex(r, g, b);
      this.container.style.background = this.getHex(r, g, b);
    }
    this.inputColor.value = this.getHex(r, g, b);
  }

  selectFormat() {
    if (this.inputSelect.selectedIndex != 0) {
      this.inputColor.disabled = false;
      this.inputBtn.disabled = false;
      this.rangeOne.disabled = false;
      this.rangeTwo.disabled = false;
      this.rangeThree.disabled = false;
    } else {
      this.rangeOne.value = 242;
      this.rangeTwo.value = 242;
      this.rangeThree.value = 242;
      this.colorSelect.textContent = this.defauldColor;
      this.container.style.background = this.defauldColor;
      this.inputColor.value = this.defauldColor;
      this.inputColor.disabled = true;
      this.inputBtn.disabled = true;
      this.rangeOne.disabled = true;
      this.rangeTwo.disabled = true;
      this.rangeThree.disabled = true;
    }
  }

  interChange() {
    let r = this.getRGB(this.inputColor.value).r;
    let g = this.getRGB(this.inputColor.value).g;
    let b = this.getRGB(this.inputColor.value).b;

    if (this.inputSelect.selectedIndex == 1) {
      //RGB
      this.colorSelect.textContent = `RGB(${r}, ${g}, ${b})`;
      this.container.style.background = `RGB(${r}, ${g}, ${b})`;
    } else if (this.inputSelect.selectedIndex == 2) {
      //Hex
      this.colorSelect.textContent = this.inputColor.value;
      this.container.style.background = this.inputColor.value;
    }

    this.rangeOne.value = r;
    this.rangeTwo.value = g;
    this.rangeThree.value = b;
  }

  randomHex() {
    const datos = "ABCDEF1234567890";
    let hex = "#";

    for (let i = 0; i <= 5; i++) {
      let datosChar = datos.charAt(Math.floor(Math.random() * datos.length));
      hex += datosChar;
    }

    let r = this.getRGB(hex).r;
    let g = this.getRGB(hex).g;
    let b = this.getRGB(hex).b;

    this.container.style.background = hex;
    if (this.inputSelect.selectedIndex == 1) {
      this.colorSelect.textContent = `RGB(${r}, ${g}, ${b})`;
      this.inputColor.value = hex;
    } else if (this.inputSelect.selectedIndex == 2) {
      this.colorSelect.textContent = hex;
      this.inputColor.value = hex;
    }

    this.rangeOne.value = r;
    this.rangeTwo.value = g;
    this.rangeThree.value = b;
  }

  getRGB(datos) {
    let hex = datos.replace(/^#/, "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return {
      r: r,
      g: g,
      b: b,
    };
  }

  getHex(r, g, b) {
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    let hex =
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    return hex;
  }
}

const manager = new colorChange();


