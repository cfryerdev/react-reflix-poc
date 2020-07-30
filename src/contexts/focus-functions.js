const KeyEnum = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  ENTER: 13,
  TAB: 9,
  ESC: 27,
  BACK: 8
}

const FocusFunctions = {

  isDirectional: (keyCode) => {
    return keyCode === KeyEnum.UP 
        || keyCode === KeyEnum.DOWN 
        || keyCode === KeyEnum.LEFT 
        || keyCode === KeyEnum.RIGHT;
  },

  getChildIndex: (element) => {
    var focusGroup = element.closest(".focus-group");
    let focusGroupItems = focusGroup.children;
    for (let index = 0; index < focusGroupItems.length; index++) {
      if (element === focusGroupItems[index]) {
        return index;
      }
    }
    return -1;
  },

  isElementInBlockRow: (element) => {
    return element.closest(".focus-group");
  },

  isElementInNavigationRow: (element) => {
    return element.closest(".nav-group");
  },

  handleDefaultFocus: (event) => {
    if (document.activeElement.tagName === "BODY") {
      if (event) {
        event.preventDefault();
      }
      document.getElementById("default-focus").focus();
      return true;
    }
    return false;
  },

  getFirstFocusGroupThatsNotNavigation: () => {
    var focusGroups = document.getElementsByClassName("focus-group");
    for (let index = 0; index < focusGroups.length; index++) {
      const element = focusGroups[index];
      if (!element.classList.contains("nav-group")) {
        return [element];
      }
    }
  },

  handleSelection_Navigation: (keyCode) => {
    if (FocusFunctions.isDirectional(keyCode)) {
      var navGroup = FocusFunctions.isElementInNavigationRow(document.activeElement);
      if (navGroup) {
        switch (keyCode) {
          case KeyEnum.RIGHT:
            var navRight = document.activeElement.nextElementSibling;
            if (navRight) { navRight.focus() ;}
            break;
          case KeyEnum.LEFT:
              var navLeft = document.activeElement.previousElementSibling;
              if (navLeft) { navLeft.focus() ;}
              break;
          case KeyEnum.DOWN:
              var firstFocusGroup = FocusFunctions.getFirstFocusGroupThatsNotNavigation();
              if (firstFocusGroup && firstFocusGroup.length > 0 && firstFocusGroup[0].children.length > 0) { 
                firstFocusGroup[0].children[0].focus();
              }
              break;
          default:
            break;
        }
      }
      return (navGroup !== null);
    }
  },

  handleSelection_FocusGroups: (keyCode) => {
    if (FocusFunctions.isDirectional(keyCode)) {
      var focusGroup = FocusFunctions.isElementInBlockRow(document.activeElement);
      if (focusGroup) {
        var rowIndex = FocusFunctions.getChildIndex(document.activeElement);
        switch (keyCode) {
          case KeyEnum.RIGHT:
            var next = document.activeElement.nextElementSibling;
            if (next) { next.focus() ;}
            break;
          case KeyEnum.LEFT:
            var previous = document.activeElement.previousElementSibling;
            if (previous) { previous.focus() ;}
            break;
          case KeyEnum.DOWN:
            var nextGroupDown = FocusFunctions.nextElementSiblingWithClass(focusGroup, "focus-group");
            if (nextGroupDown) { 
              if (nextGroupDown.children.length < rowIndex + 1) {
                nextGroupDown.children[0].focus();
              } else {
                nextGroupDown.children[rowIndex].focus();
              }
            }
            break;
          case KeyEnum.UP:
            var nextGroupUp = FocusFunctions.previousElementSiblingWithClass(focusGroup, "focus-group");
            if (nextGroupUp) { 
              if (nextGroupUp.children.length < rowIndex + 1) {
                nextGroupUp.children[0].focus();
              } else {
                nextGroupUp.children[rowIndex].focus();
              }
            } else {
              document.getElementById("default-focus").focus();
            }
            break;
          default:
            break;
        }
      }
      return (focusGroup !== null);
    }
  },

  handleSelection_Back: (event) => {
    var inputs = ['input', 'select', 'button', 'textarea'];
    var activeElement = document.activeElement;
    if (activeElement && inputs.indexOf(activeElement.tagName.toLowerCase()) !== -1) {
        return false;
    }
    if (event.keyCode === KeyEnum.ESC || event.keyCode === KeyEnum.BACK) {
      event.preventDefault();
      console.log('back-pressed');
      return true;
    }
    return false;
  },

  nextElementSiblingWithClass: (element, className) => {
    var sibling = element.nextElementSibling;
    while (sibling) {
      if (sibling.className.includes(className)) return sibling;
      sibling = sibling.nextElementSibling;
    }
    return sibling;
  },

  previousElementSiblingWithClass: (element, className) => {
    var sibling = element.previousElementSibling;
    while (sibling) {
      if (sibling.className.includes(className)) return sibling;
      sibling = sibling.previousElementSibling;
    }
    return sibling;
  },
  
}

export { FocusFunctions, KeyEnum };
