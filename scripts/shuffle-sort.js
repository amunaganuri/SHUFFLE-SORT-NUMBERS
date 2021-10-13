let keypadNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const renderKeypad = () => {
  let keyPadContent = "";
  for (let index = 0; index < keypadNumberList.length; index++) {
    keyPadContent += `<div  card-number="${keypadNumberList[index]}" >${keypadNumberList[index]}</div>`;
  }
  // updating the keypad container
  document.getElementById("keypad-container").innerHTML = keyPadContent;
};

// Calling renderKeypad on load to update the keypad container with default sorting
renderKeypad();

const shuffle = () => {
  let curId = keypadNumberList.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // swapping element.
    let tmp = keypadNumberList[curId];
    keypadNumberList[curId] = keypadNumberList[randId];
    keypadNumberList[randId] = tmp;
  }
  renderKeypad();
};
const sort = () => {
  keypadNumberList.sort(function (a, b) {
    return a - b;
  });
  renderKeypad();
};
