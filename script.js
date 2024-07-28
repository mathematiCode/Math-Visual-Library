// Global Functions
const mathVisual = {};
// I made this a global variable because I may change it later or make it customizable by the user. It means the circles will start shading at 270 degrees going counterclockwise. This is so that if there are a few pieces that go in the same group as some in the next circle, they are closer together.
angleWherePiecesStart = Math.PI * 0.5;

function basicFrac() {
  // HTML Elements from the basic fraction page
  const generateBasicButton = document.getElementById("generate-basic");
  const modelToggle = document.getElementById("basic-model-toggle");
  const basicSVG = document.getElementById("basic-svg");
  let mixedNum = {};

  generateBasicButton.addEventListener("click", function () {
    mixedNum.wholeNum = parseInt(
      document.getElementById("basic-whole-number").value
    );
    mixedNum.numerator = parseInt(
      document.getElementById("basic-numerator").value
    );
    mixedNum.denominator = parseInt(
      document.getElementById("basic-denominator").value
    );

    basicSVG.innerHTML = "";
    if (modelToggle.checked) {
      mathVisual.fractionBar(basicSVG, mixedNum);
    } else {
      mathVisual.fractionCircle(basicSVG, mixedNum);
    }
  });

  modelToggle.addEventListener("change", () => {
    mixedNum.wholeNum = parseInt(
      document.getElementById("basic-whole-number").value
    );
    mixedNum.numerator = parseInt(
      document.getElementById("basic-numerator").value
    );
    mixedNum.denominator = parseInt(
      document.getElementById("basic-denominator").value
    );
    basicSVG.innerHTML = "";
    if (modelToggle.checked) {
      mathVisual.fractionBar(basicSVG, mixedNum);
    } else {
      mathVisual.fractionCircle(basicSVG, mixedNum);
    }
  });

  const downloadPngButton = document.getElementById("basic-png-button");
  const downloadBasicSVGButton = document.getElementById("basic-svg-button");
  const copyPngButton = document.getElementById("basic-copy-button");
  downloadPngButton.addEventListener("click", function () {
    downloadPng(basicSVG);
  });
  downloadBasicSVGButton.addEventListener("click", function () {
    downloadSvg(basicSVG);
  });
  copyPngButton.addEventListener("click", function () {
    copyPngToClipboard(basicSVG);
  });
}

function multiplicationFrac() {
  // HTML Elements from the Multiplication page
  const generateMultiplicationButton = document.getElementById(
    "generate-multiplication"
  );

  function generateMultiplicationModel() {
    const multiplicationSVG = document.getElementById("multiplication-svg");
    let factor1 = {};
    const factor2 = {};
    factor1.wholeNum = parseInt(
      document.getElementById("multiplication-whole-number1").value
    );
    factor1.numerator = parseInt(
      document.getElementById("multiplication-numerator1").value
    );
    factor1.denominator = parseInt(
      document.getElementById("multiplication-denominator1").value
    );
    factor2.wholeNum = parseInt(
      document.getElementById("multiplication-whole-number2").value
    );
    factor2.numerator = parseInt(
      document.getElementById("multiplication-numerator2").value
    );
    factor2.denominator = parseInt(
      document.getElementById("multiplication-denominator2").value
    );

    let toScale = document.getElementById("to-scale-checkbox").checked;

    multiplicationSVG.innerHTML = "";
    mathVisual.fractionMultiplicationAreaModel(
      multiplicationSVG,
      factor1,
      factor2,
      (lineThickness = 5),
      (colorFill = "hsla(188, 37%, 51%,70%)"),
      (colorFill2 = "hsla(96, 70%, 66%,50%)"),
      toScale
    );
  }

  generateMultiplicationButton.addEventListener("click", function () {
    generateMultiplicationModel();
  });

  // const multiplicationPngButton = document.getElementById("multiplication-png-button");
  // divisionPngButton.addEventListener("click", function () {
  //   downloadPng("division-svg");
  // });
  const downloadMultiplicationSVG = document.getElementById("mult-svg-button");
  const downloadMultiplicationPNG = document.getElementById("mult-png-button");
  const copyPngButton = document.getElementById("mult-copy-button");
  const toScaleCheck = document.getElementById("to-scale-checkbox");

  toScaleCheck.addEventListener("change", function () {
    generateMultiplicationModel();
  });
  downloadMultiplicationSVG.addEventListener("click", function () {
    const multiplicationSVG = document.getElementById("multiplication-svg");
    downloadSvg(multiplicationSVG);
  });

  downloadMultiplicationPNG.addEventListener("click", function () {
    const multiplicationSVG = document.getElementById("multiplication-svg");
    downloadPng(multiplicationSVG);
  });
  copyPngButton.addEventListener("click", function () {
    const multiplicationSVG = document.getElementById("multiplication-svg");
    copyPngToClipboard(multiplicationSVG);
  });
}

function divisionFrac() {
  // HTML Elements from the Division page
  const generateDivisionButton = document.getElementById("generate-division");
  const modelToggle = document.getElementById("division-model-toggle");

  generateDivisionButton.addEventListener("click", function () {
    const divisionSVG = document.getElementById("division-svg");
    let dividend = {};
    let divisor = {};
    dividend.wholeNum = parseInt(
      document.getElementById("division-whole-number1").value
    );
    dividend.numerator = parseInt(
      document.getElementById("division-numerator1").value
    );
    dividend.denominator = parseInt(
      document.getElementById("division-denominator1").value
    );
    divisor.numerator = parseInt(
      document.getElementById("division-numerator2").value
    );
    divisor.denominator = parseInt(
      document.getElementById("division-denominator2").value
    );
    divisionSVG.innerHTML = "";
    if (modelToggle.checked) {
      mathVisual.fractionDivisionBar(divisionSVG, dividend, divisor);
    } else {
      mathVisual.fractionDivisionCircles(
        divisionSVG,
        dividend,
        divisor,
        (lineThickness = 5),
        (colorFill = "#52a4b0"),
        (colorFill2 = "#f0a68c")
      );
    }
  });

  const divisionPngButton = document.getElementById("division-png-button");
  divisionPngButton.addEventListener("click", function () {
    const divisionSVG = document.getElementById("division-svg");
    downloadPng(divisionSVG);
  });
  const downloadDivisionSVG = document.getElementById("division-svg-button");
  downloadDivisionSVG.addEventListener("click", function () {
    const divisionSVG = document.getElementById("division-svg");
    downloadSvg(divisionSVG);
  });

  const copyPngButton = document.getElementById("division-copy-button");
  copyPngButton.addEventListener("click", function () {
    const divisionSVG = document.getElementById("division-svg");
    copyPngToClipboard(divisionSVG);
  });

  modelToggle.addEventListener("change", () => {
    const divisionSVG = document.getElementById("division-svg");
    let dividend = {};
    let divisor = {};
    dividend.wholeNum = parseInt(
      document.getElementById("division-whole-number1").value
    );
    dividend.numerator = parseInt(
      document.getElementById("division-numerator1").value
    );
    dividend.denominator = parseInt(
      document.getElementById("division-denominator1").value
    );
    divisor.numerator = parseInt(
      document.getElementById("division-numerator2").value
    );
    divisor.denominator = parseInt(
      document.getElementById("division-denominator2").value
    );

    divisionSVG.innerHTML = "";
    if (modelToggle.checked) {
      mathVisual.fractionDivisionBar(divisionSVG, dividend, divisor);
    } else {
      mathVisual.fractionDivisionCircles(
        divisionSVG,
        dividend,
        divisor,
        (lineThickness = 5),
        (colorFill = "#52a4b0"),
        (colorFill2 = "#f0a68c")
      );
    }
  });
}

function logoScript() {
  let logoSVG = document.getElementById("logo-svg");
  const downloadLogoSVG = document.getElementById("logo-svg-button");

  // downloadLogoSVG.addEventListener("click", function () {
  //   downloadSvg(logoSVG);
  // });
}

// let cornerLogo = document.getElementsByClassName("corner-logo");
// let sideNavToggle = document.getElementsByClassName("side-nav");
// cornerLogo.addEventListener("click", function () {
//   let currentDisplay = getComputedStyle(sideNavToggle).display;
//   if (currentDisplay == "none") {
//     sideNavToggle.setAttribute("display", "flex");
//   } else {
//     sideNavToggle.setAttribute("display", "none");
//   }
// });
