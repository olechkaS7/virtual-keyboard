
const keyLayout = {
  Backquote: {
    name: 'Backquote', LCaseEN: '`', UCaseEN: '~', LCaseRU: 'ё', UCaseRU: 'Ё', className: 'key',
  },
  Digit1: {
    name: 'Digit1', LCaseEN: '1', UCaseEN: '!', LCaseRU: '1', UCaseRU: '!', className: 'key',
  },
  Digit2: {
    name: 'Digit2', LCaseEN: '2', UCaseEN: '@', LCaseRU: '2', UCaseRU: '"', className: 'key',
  },
  Digit3: {
    name: 'Digit3', LCaseEN: '3', UCaseEN: '#', LCaseRU: '3', UCaseRU: '№', className: 'key',
  },
  Digit4: {
    name: 'Digit4', LCaseEN: '4', UCaseEN: '$', LCaseRU: '4', UCaseRU: ';', className: 'key',
  },
  Digit5: {
    name: 'Digit5', LCaseEN: '5', UCaseEN: '%', LCaseRU: '5', UCaseRU: '%', className: 'key',
  },
  Digit6: {
    name: 'Digit6', LCaseEN: '6', UCaseEN: '^', LCaseRU: '6', UCaseRU: ':', className: 'key',
  },
  Digit7: {
    name: 'Digit7', LCaseEN: '7', UCaseEN: '&', LCaseRU: '7', UCaseRU: '?', className: 'key',
  },
  Digit8: {
    name: 'Digit8', LCaseEN: '8', UCaseEN: '*', LCaseRU: '8', UCaseRU: '*', className: 'key',
  },
  Digit9: {
    name: 'Digit9', LCaseEN: '9', UCaseEN: '(', LCaseRU: '9', UCaseRU: '(', className: 'key',
  },
  Digit0: {
    name: 'Digit0', LCaseEN: '0', UCaseEN: ')', LCaseRU: '0', UCaseRU: ')', className: 'key',
  },
  Minus: {
    name: 'Minus', LCaseEN: '-', UCaseEN: '_', LCaseRU: '-', UCaseRU: '_', className: 'key',
  },
  Equal: {
    name: 'Equal', LCaseEN: '=', UCaseEN: '+', LCaseRU: '=', UCaseRU: '+', className: 'key',
  },
  Backspace: {
    name: 'Backspace', LCaseEN: 'Backspace', UCaseEN: 'Backspace', LCaseRU: 'Backspace', UCaseRU: 'Backspace', className: 'key backspace',
  },

  Tab: {
    name: 'Tab', LCaseEN: 'Tab', UCaseEN: 'Tab', LCaseRU: 'Tab', UCaseRU: 'Tab', className: 'key tab',
  },
  KeyQ: {
    name: 'KeyQ', LCaseEN: 'q', UCaseEN: 'Q', LCaseRU: 'й', UCaseRU: 'Й', className: 'key',
  },
  KeyW: {
    name: 'KeyW', LCaseEN: 'w', UCaseEN: 'W', LCaseRU: 'ц', UCaseRU: 'Ц', className: 'key',
  },
  KeyE: {
    name: 'KeyE', LCaseEN: 'e', UCaseEN: 'E', LCaseRU: 'у', UCaseRU: 'У', className: 'key',
  },
  KeyR: {
    name: 'KeyR', LCaseEN: 'r', UCaseEN: 'R', LCaseRU: 'к', UCaseRU: 'К', className: 'key',
  },
  KeyT: {
    name: 'KeyT', LCaseEN: 't', UCaseEN: 'T', LCaseRU: 'е', UCaseRU: 'Е', className: 'key',
  },
  KeyY: {
    name: 'KeyY', LCaseEN: 'y', UCaseEN: 'Y', LCaseRU: 'н', UCaseRU: 'Н', className: 'key',
  },
  KeyU: {
    name: 'KeyU', LCaseEN: 'u', UCaseEN: 'U', LCaseRU: 'г', UCaseRU: 'Г', className: 'key',
  },
  KeyI: {
    name: 'KeyI', LCaseEN: 'i', UCaseEN: 'I', LCaseRU: 'ш', UCaseRU: 'Ш', className: 'key',
  },
  KeyO: {
    name: 'KeyO', LCaseEN: 'o', UCaseEN: 'O', LCaseRU: 'щ', UCaseRU: 'Щ', className: 'key',
  },
  KeyP: {
    name: 'KeyP', LCaseEN: 'p', UCaseEN: 'P', LCaseRU: 'з', UCaseRU: 'З', className: 'key',
  },
  BracketLeft: {
    name: 'BracketLeft', LCaseEN: '[', UCaseEN: '{', LCaseRU: 'х', UCaseRU: 'Х', className: 'key',
  },
  BracketRight: {
    name: 'BracketRight', LCaseEN: ']', UCaseEN: '}', LCaseRU: 'ъ', UCaseRU: 'Ъ', className: 'key',
  },
  Backslash: {
    name: 'Backslash', LCaseEN: '\\', UCaseEN: '|', LCaseRU: '\\', UCaseRU: '/', className: 'key',
  },
  Delete: {
    name: 'Delete', LCaseEN: 'DEL', UCaseEN: 'DEL', LCaseRU: 'DEL', UCaseRU: 'DEL', className: 'key del',
  },

  CapsLock: {
    name: 'CapsLock', LCaseEN: 'CapsLock', UCaseEN: 'CapsLock', LCaseRU: 'CapsLock', UCaseRU: 'CapsLock', className: 'key capsLock',
  },
  KeyA: {
    name: 'KeyA', LCaseEN: 'a', UCaseEN: 'A', LCaseRU: 'ф', UCaseRU: 'Ф', className: 'key',
  },
  KeyS: {
    name: 'KeyS', LCaseEN: 's', UCaseEN: 'S', LCaseRU: 'ы', UCaseRU: 'Ы', className: 'key',
  },
  KeyD: {
    name: 'KeyD', LCaseEN: 'd', UCaseEN: 'D', LCaseRU: 'в', UCaseRU: 'В', className: 'key',
  },
  KeyF: {
    name: 'KeyF', LCaseEN: 'f', UCaseEN: 'F', LCaseRU: 'а', UCaseRU: 'А', className: 'key',
  },
  KeyG: {
    name: 'KeyG', LCaseEN: 'g', UCaseEN: 'G', LCaseRU: 'п', UCaseRU: 'П', className: 'key',
  },
  KeyH: {
    name: 'KeyH', LCaseEN: 'h', UCaseEN: 'H', LCaseRU: 'р', UCaseRU: 'Р', className: 'key',
  },
  KeyJ: {
    name: 'KeyJ', LCaseEN: 'j', UCaseEN: 'J', LCaseRU: 'о', UCaseRU: 'О', className: 'key',
  },
  KeyK: {
    name: 'KeyK', LCaseEN: 'k', UCaseEN: 'K', LCaseRU: 'л', UCaseRU: 'Л', className: 'key',
  },
  KeyL: {
    name: 'KeyL', LCaseEN: 'l', UCaseEN: 'L', LCaseRU: 'д', UCaseRU: 'Д', className: 'key',
  },
  Semicolon: {
    name: 'Semicolon', LCaseEN: ';', UCaseEN: ';', LCaseRU: 'ж', UCaseRU: 'Ж', className: 'key',
  },
  Quote: {
    name: 'Quote', LCaseEN: '\'', UCaseEN: '\'', LCaseRU: 'э', UCaseRU: 'Э', className: 'key',
  },
  Enter: {
    name: 'Enter', LCaseEN: 'ENTER', UCaseEN: 'ENTER', LCaseRU: 'ENTER', UCaseRU: 'ENTER', className: 'key enter',
  },

  ShiftLeft: {
    name: 'ShiftLeft', LCaseEN: 'Shift', UCaseEN: 'Shift', LCaseRU: 'Shift', UCaseRU: 'Shift', className: 'key shift_left',
  },
  KeyZ: {
    name: 'KeyZ', LCaseEN: 'z', UCaseEN: 'Z', LCaseRU: 'я', UCaseRU: 'Я', className: 'key',
  },
  KeyX: {
    name: 'KeyX', LCaseEN: 'x', UCaseEN: 'X', LCaseRU: 'ч', UCaseRU: 'Ч', className: 'key',
  },
  KeyC: {
    name: 'KeyC', LCaseEN: 'c', UCaseEN: 'C', LCaseRU: 'с', UCaseRU: 'С', className: 'key',
  },
  KeyV: {
    name: 'KeyV', LCaseEN: 'v', UCaseEN: 'V', LCaseRU: 'м', UCaseRU: 'М', className: 'key',
  },
  KeyB: {
    name: 'KeyB', LCaseEN: 'b', UCaseEN: 'B', LCaseRU: 'и', UCaseRU: 'И', className: 'key',
  },
  KeyN: {
    name: 'KeyN', LCaseEN: 'n', UCaseEN: 'N', LCaseRU: 'т', UCaseRU: 'Т', className: 'key',
  },
  KeyM: {
    name: 'KeyM', LCaseEN: 'm', UCaseEN: 'M', LCaseRU: 'ь', UCaseRU: 'Ь', className: 'key',
  },
  Comma: {
    name: 'Comma', LCaseEN: ',', UCaseEN: ',', LCaseRU: 'б', UCaseRU: 'Б', className: 'key',
  },
  Period: {
    name: 'Period', LCaseEN: '.', UCaseEN: '.', LCaseRU: 'ю', UCaseRU: 'Ю', className: 'key',
  },
  Slash: {
    name: 'Slash', LCaseEN: '/', UCaseEN: '/', LCaseRU: '.', UCaseRU: '.', className: 'key',
  },
  ArrowUp: {
    name: 'ArrowUp', LCaseEN: '▲', UCaseEN: '▲', LCaseRU: '▲', UCaseRU: '▲', className: 'key arrow_up',
  },
  ShiftRight: {
    name: 'ShiftRight', LCaseEN: 'Shift', UCaseEN: 'Shift', LCaseRU: 'Shift', UCaseRU: 'Shift', className: 'key shift_right',
  },

  ControlLeft: {
    name: 'ControlLeft', LCaseEN: 'Ctrl', UCaseEN: 'Ctrl', LCaseRU: 'Ctrl', UCaseRU: 'Ctrl', className: 'key control_left',
  },
  MetaLeft: {
    name: 'MetaLeft', LCaseEN: 'Win', UCaseEN: 'Win', LCaseRU: 'Win', UCaseRU: 'Win', className: 'key meta_left',
  },
  AltLeft: {
    name: 'AltLeft', LCaseEN: 'Alt', UCaseEN: 'Alt', LCaseRU: 'Alt', UCaseRU: 'Alt', className: 'key alt_left',
  },
  Space: {
    name: 'Space', LCaseEN: ' ', UCaseEN: ' ', LCaseRU: ' ', UCaseRU: ' ', className: 'key space',
  },
  AltRight: {
    name: 'AltRight', LCaseEN: 'Alt', UCaseEN: 'Alt', LCaseRU: 'Alt', UCaseRU: 'Alt', className: 'key alt_right',
  },
  ArrowLeft: {
    name: 'ArrowLeft', LCaseEN: '◄', UCaseEN: '◄', LCaseRU: '◄', UCaseRU: '◄', className: 'key arrow_left',
  },
  ArrowDown: {
    name: 'ArrowDown', LCaseEN: '▼', UCaseEN: '▼', LCaseRU: '▼', UCaseRU: '▼', className: 'key arrow_down',
  },
  ArrowRight: {
    name: 'ArrowRight', LCaseEN: '►', UCaseEN: '►', LCaseRU: '►', UCaseRU: '►', className: 'key arrow_right',
  },
  ControlRight: {
    name: 'ControlRight', LCaseEN: 'Ctrl', UCaseEN: 'Ctrl', LCaseRU: 'Ctrl', UCaseRU: 'Ctrl', className: 'key control_right',
  },
};

const CAPSLOCK = 'CapsLock';
const SHIFT_LEFT = 'ShiftLeft';
const SHIFT_RIGHT = 'ShiftRight';
const META_LEFT = 'MetaLeft';

const languages = ['EN', 'RU'];

const caseModifier = {
  isShift: false,
  isCapslock: false,
};

const toggleLanguage = ['AltLeft', 'ControlLeft'];

const pressedKeys = new Set();

let currentLang = (localStorage.getItem('keyboardLanguage') === null)
  ? languages[0] : localStorage.getItem('keyboardLanguage');

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

const input = document.createElement('textarea');
input.id = 'input';
input.className = 'input';
input.cols = 60;
input.rows = 5;
input.autofocus = true;
wrapper.append(input);

const keyboard = document.createElement('div');
keyboard.id = 'keyboard';
keyboard.className = 'keyboard';
wrapper.append(keyboard);

const notes = document.createElement('div');
notes.innerText = ' Для переключения языка комбинация: Ctr+lAlt. Клавиатура создана в операционной системе Windows 10.';
notes.className = 'notes';
wrapper.append(notes);

const langCase = (currentLang === 'EN') ? 'LCaseEN' : 'LCaseRU';
Object.keys(keyLayout).forEach((key) => {
  const keyButton = document.createElement('button');
  keyButton.type = 'button';
  keyButton.id = key;
  keyButton.className = keyLayout[key].className;
  keyButton.textContent = keyLayout[key][langCase];
  keyboard.append(keyButton);
});

const keyButtons = document.querySelectorAll('.key');

function getLang(current) {
  const currentIndex = languages.indexOf(current);
  const nextIndex = (currentIndex + 1) % languages.length;
  return languages[nextIndex];
}

function getKeyCase(capsLock, shift, lang) {
  const { 0: EN, 1: RU } = languages;
  switch (true) {
    case (lang === RU) && capsLock:
      return shift ? 'LCaseRU' : 'UCaseRU';
    case (lang === RU) && !capsLock:
      return shift ? 'UCaseRU' : 'LCaseRU';
    case (lang === EN) && capsLock:
      return shift ? 'LCaseEN' : 'UCaseEN';
    case (lang === EN) && !capsLock:
      return shift ? 'UCaseEN' : 'LCaseEN';
    default:
      throw new Error('no more cases');
  }
}

function redrawCases() {
  const { isShift, isCapslock } = caseModifier;
  const keyCase = getKeyCase(isCapslock, isShift, currentLang);
  keyButtons.forEach((btn) => {
    const key = btn;
    const { id } = key;
    key.textContent = keyLayout[id][keyCase];
  });
}

function onKeyPressed(char) {
  const { selectionStart, selectionEnd, value } = input;

  if (selectionStart !== selectionEnd) {
    input.value = value.slice(0, selectionStart) + char + value.slice(selectionEnd);
  } else {
    input.value = value.slice(0, selectionStart) + char + value.slice(selectionStart);
  }

  input.selectionStart = selectionStart + 1;
  input.selectionEnd = selectionStart + 1;
}

function onTabPressed() {
  onKeyPressed('\t');
}

function onEnterPressed() {
  onKeyPressed('\n');
}

function onBackspacePressed() {
  const { selectionStart, selectionEnd, value } = input;

  if ((selectionStart !== selectionEnd) && (selectionStart !== 0)) {
    input.value = value.slice(0, selectionStart) + value.slice(selectionEnd);
    input.selectionStart = selectionStart;
    input.selectionEnd = selectionStart;
  } else if ((selectionStart !== selectionEnd) && (selectionStart === 0)) {
    input.value = value.slice(selectionEnd);
    input.selectionStart = 0;
    input.selectionEnd = 0;
  } else if (selectionStart !== 0) {
    input.value = value.slice(0, selectionStart - 1) + value.slice(selectionEnd);
    input.selectionStart = selectionStart - 1;
    input.selectionEnd = selectionStart - 1;
  } else {
    input.selectionStart = 0;
    input.selectionEnd = 0;
  }
}

function onDeletePressed() {
  const { selectionStart, selectionEnd, value } = input;

  if (selectionStart !== selectionEnd) {
    input.value = value.slice(0, selectionStart) + value.slice(selectionEnd);
  } else {
    input.value = value.slice(0, selectionStart) + value.slice(selectionStart + 1);
  }

  input.selectionStart = selectionStart;
  input.selectionEnd = selectionStart;
}

function onArrowLeftPressed() {
  const { selectionStart, selectionEnd } = input;

  if ((selectionStart !== selectionEnd) && (selectionStart !== 0)) {
    input.selectionStart = selectionStart;
    input.selectionEnd = input.selectionStart;
  } else if (selectionStart !== 0) {
    input.selectionStart = selectionStart - 1;
    input.selectionEnd = selectionStart - 1;
  } else {
    input.selectionStart = 0;
    input.selectionEnd = 0;
  }
}

function onArrowRightPressed() {
  const { selectionStart, selectionEnd } = input;

  if (selectionStart !== selectionEnd) {
    input.selectionStart = selectionEnd;
  } else {
    input.selectionStart = selectionStart + 1;
  }

  input.selectionEnd = input.selectionStart;
}

function printKey(key) {
  const { textContent, id } = key;
  switch (id) {
    case 'Backspace':
      onBackspacePressed();
      break;
    case 'Tab':
      onTabPressed();
      break;
    case 'Delete':
      onDeletePressed();
      break;
    case 'Enter':
      onEnterPressed();
      break;
    case 'ControlLeft':
      break;
    case 'AltLeft':
      break;
    case 'AltRight':
      break;
    case 'ControlRight':
      break;
    case 'ArrowLeft':
      onArrowLeftPressed();
      break;
    case 'ArrowRight':
      onArrowRightPressed();
      break;
    default:
      onKeyPressed(textContent);
  }
}

function toggleActive(btn, bool) {
  btn.classList.toggle('active', bool);
}

function onMousedownEvent(target) {
  const { id } = target;
  let prev;
  let lang;

  switch (id) {
    case CAPSLOCK:
      prev = caseModifier.isCapslock;
      caseModifier.isCapslock = !prev;
      toggleActive(target, !prev);
      redrawCases();
      break;
    case SHIFT_LEFT:
      prev = caseModifier.isShift;
      caseModifier.isShift = !prev;
      redrawCases();
      break;
    case SHIFT_RIGHT:
      prev = caseModifier.isShift;
      caseModifier.isShift = !prev;
      redrawCases();
      break;
    case META_LEFT:
      lang = getLang(currentLang);
      currentLang = lang;
      redrawCases();
      break;
    default:
      printKey(target);
  }
}

function getKeyById(id) {
  let btnIndex = 0;

  keyButtons.forEach((btn, index) => {
    if (btn.id === id) {
      btnIndex = index;
    }
  });

  return keyButtons[btnIndex];
}

function isLangToggle() {
  let isToggle = true;

  toggleLanguage.forEach((code) => {
    if (!pressedKeys.has(code)) {
      isToggle = false;
    }
  });

  if (isToggle) {
    const lang = getLang(currentLang);
    currentLang = lang;
    redrawCases();

    pressedKeys.clear();
  }
}

keyboard.addEventListener('mousedown', (evt) => {
  if (evt.target.tagName !== 'BUTTON') return;
  const { target } = evt;
  onMousedownEvent(target);
  input.focus();
});

keyboard.addEventListener('mouseup', (evt) => {
  const { id } = evt.target;

  if (id === 'ShiftLeft' || id === 'ShiftRight') {
    caseModifier.isShift = false;
    redrawCases();
  }

  input.focus();
});

keyboard.addEventListener('mouseout', (evt) => {
  const { id } = evt.target;

  if (id === 'ShiftLeft' || id === 'ShiftRight') {
    caseModifier.isShift = false;
    redrawCases();
  }

  input.focus();
});

document.addEventListener('keydown', (evt) => {
  const { code } = evt;

  if (code === 'ShiftLeft'
    || code === 'ShiftRight'
    || code === 'CapsLock'
    || code === 'ControlLeft'
    || code === 'ControlRight'
    || code === 'AltLeft'
    || code === 'AltRight') {
    if (evt.repeat === true) return;
  }

  pressedKeys.add(code);
  isLangToggle();

  const btn = getKeyById(code);
  toggleActive(btn, true);
  onMousedownEvent(btn);

  evt.preventDefault();
});

document.addEventListener('keyup', (evt) => {
  const { code } = evt;
  pressedKeys.delete(code);

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    caseModifier.isShift = false;
    redrawCases();
  }

  const btn = getKeyById(code);
  if (code !== 'CapsLock') {
    toggleActive(btn, false);
  }
});

input.addEventListener('blur', () => {
  input.focus();
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('keyboardLanguage', currentLang);
});
