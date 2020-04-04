
const keyLayout = {
  Backquote: {
    name: 'Backquote', LCaseEng: '`', UCaseEng: '~', LCaseRu: 'ё', UCaseRu: 'Ё', className: 'key',
  },
  Digit1: {
    name: 'Digit1', LCaseEng: '1', UCaseEng: '!', LCaseRu: '1', UCaseRu: '!', className: 'key',
  },
  Digit2: {
    name: 'Digit2', LCaseEng: '2', UCaseEng: '@', LCaseRu: '2', UCaseRu: '"', className: 'key',
  },
  Digit3: {
    name: 'Digit3', LCaseEng: '3', UCaseEng: '#', LCaseRu: '3', UCaseRu: '№', className: 'key',
  },
  Digit4: {
    name: 'Digit4', LCaseEng: '4', UCaseEng: '$', LCaseRu: '4', UCaseRu: ';', className: 'key',
  },
  Digit5: {
    name: 'Digit5', LCaseEng: '5', UCaseEng: '%', LCaseRu: '5', UCaseRu: '%', className: 'key',
  },
  Digit6: {
    name: 'Digit6', LCaseEng: '6', UCaseEng: '^', LCaseRu: '6', UCaseRu: ':', className: 'key',
  },
  Digit7: {
    name: 'Digit7', LCaseEng: '7', UCaseEng: '&', LCaseRu: '7', UCaseRu: '?', className: 'key',
  },
  Digit8: {
    name: 'Digit8', LCaseEng: '8', UCaseEng: '*', LCaseRu: '8', UCaseRu: '*', className: 'key',
  },
  Digit9: {
    name: 'Digit9', LCaseEng: '9', UCaseEng: '(', LCaseRu: '9', UCaseRu: '(', className: 'key',
  },
  Digit0: {
    name: 'Digit0', LCaseEng: '0', UCaseEng: ')', LCaseRu: '0', UCaseRu: ')', className: 'key',
  },
  Minus: {
    name: 'Minus', LCaseEng: '-', UCaseEng: '_', LCaseRu: '-', UCaseRu: '_', className: 'key',
  },
  Equal: {
    name: 'Equal', LCaseEng: '=', UCaseEng: '+', LCaseRu: '=', UCaseRu: '+', className: 'key',
  },
  Backspace: {
    name: 'Backspace', LCaseEng: 'Backspace', UCaseEng: 'Backspace', LCaseRu: 'Backspace', UCaseRu: 'Backspace', className: 'key backspace',
  },

  Tab: {
    name: 'Tab', LCaseEng: 'Tab', UCaseEng: 'Tab', LCaseRu: 'Tab', UCaseRu: 'Tab', className: 'key tab',
  },
  KeyQ: {
    name: 'KeyQ', LCaseEng: 'q', UCaseEng: 'Q', LCaseRu: 'й', UCaseRu: 'Й', className: 'key',
  },
  KeyW: {
    name: 'KeyW', LCaseEng: 'w', UCaseEng: 'W', LCaseRu: 'ц', UCaseRu: 'Ц', className: 'key',
  },
  KeyE: {
    name: 'KeyE', LCaseEng: 'e', UCaseEng: 'E', LCaseRu: 'у', UCaseRu: 'У', className: 'key',
  },
  KeyR: {
    name: 'KeyR', LCaseEng: 'r', UCaseEng: 'R', LCaseRu: 'к', UCaseRu: 'К', className: 'key',
  },
  KeyT: {
    name: 'KeyT', LCaseEng: 't', UCaseEng: 'T', LCaseRu: 'е', UCaseRu: 'Е', className: 'key',
  },
  KeyY: {
    name: 'KeyY', LCaseEng: 'y', UCaseEng: 'Y', LCaseRu: 'н', UCaseRu: 'Н', className: 'key',
  },
  KeyU: {
    name: 'KeyU', LCaseEng: 'u', UCaseEng: 'U', LCaseRu: 'г', UCaseRu: 'Г', className: 'key',
  },
  KeyI: {
    name: 'KeyI', LCaseEng: 'i', UCaseEng: 'I', LCaseRu: 'ш', UCaseRu: 'Ш', className: 'key',
  },
  KeyO: {
    name: 'KeyO', LCaseEng: 'o', UCaseEng: 'O', LCaseRu: 'щ', UCaseRu: 'Щ', className: 'key',
  },
  KeyP: {
    name: 'KeyP', LCaseEng: 'p', UCaseEng: 'P', LCaseRu: 'з', UCaseRu: 'З', className: 'key',
  },
  BracketLeft: {
    name: 'BracketLeft', LCaseEng: '[', UCaseEng: '{', LCaseRu: 'х', UCaseRu: 'Х', className: 'key',
  },
  BracketRight: {
    name: 'BracketRight', LCaseEng: ']', UCaseEng: '}', LCaseRu: 'ъ', UCaseRu: 'Ъ', className: 'key',
  },
  Backslash: {
    name: 'Backslash', LCaseEng: '\\', UCaseEng: '|', LCaseRu: '\\', UCaseRu: '/', className: 'key',
  },
  Delete: {
    name: 'Delete', LCaseEng: 'DEL', UCaseEng: 'DEL', LCaseRu: 'DEL', UCaseRu: 'DEL', className: 'key del',
  },

  CapsLock: {
    name: 'CapsLock', LCaseEng: 'CapsLock', UCaseEng: 'CapsLock', LCaseRu: 'CapsLock', UCaseRu: 'CapsLock', className: 'key capsLock',
  },
  KeyA: {
    name: 'KeyA', LCaseEng: 'a', UCaseEng: 'A', LCaseRu: 'ф', UCaseRu: 'Ф', className: 'key',
  },
  KeyS: {
    name: 'KeyS', LCaseEng: 's', UCaseEng: 'S', LCaseRu: 'ы', UCaseRu: 'Ы', className: 'key',
  },
  KeyD: {
    name: 'KeyD', LCaseEng: 'd', UCaseEng: 'D', LCaseRu: 'в', UCaseRu: 'В', className: 'key',
  },
  KeyF: {
    name: 'KeyF', LCaseEng: 'f', UCaseEng: 'F', LCaseRu: 'а', UCaseRu: 'А', className: 'key',
  },
  KeyG: {
    name: 'KeyG', LCaseEng: 'g', UCaseEng: 'G', LCaseRu: 'п', UCaseRu: 'П', className: 'key',
  },
  KeyH: {
    name: 'KeyH', LCaseEng: 'h', UCaseEng: 'H', LCaseRu: 'р', UCaseRu: 'Р', className: 'key',
  },
  KeyJ: {
    name: 'KeyJ', LCaseEng: 'j', UCaseEng: 'J', LCaseRu: 'о', UCaseRu: 'О', className: 'key',
  },
  KeyK: {
    name: 'KeyK', LCaseEng: 'k', UCaseEng: 'K', LCaseRu: 'л', UCaseRu: 'Л', className: 'key',
  },
  KeyL: {
    name: 'KeyL', LCaseEng: 'l', UCaseEng: 'L', LCaseRu: 'д', UCaseRu: 'Д', className: 'key',
  },
  Semicolon: {
    name: 'Semicolon', LCaseEng: ';', UCaseEng: ';', LCaseRu: 'ж', UCaseRu: 'Ж', className: 'key',
  },
  Quote: {
    name: 'Quote', LCaseEng: '\'', UCaseEng: '\'', LCaseRu: 'э', UCaseRu: 'Э', className: 'key',
  },
  Enter: {
    name: 'Enter', LCaseEng: 'ENTER', UCaseEng: 'ENTER', LCaseRu: 'ENTER', UCaseRu: 'ENTER', className: 'key enter',
  },

  ShiftLeft: {
    name: 'ShiftLeft', LCaseEng: 'Shift', UCaseEng: 'Shift', LCaseRu: 'Shift', UCaseRu: 'Shift', className: 'key shift_left',
  },
  KeyZ: {
    name: 'KeyZ', LCaseEng: 'z', UCaseEng: 'Z', LCaseRu: 'я', UCaseRu: 'Я', className: 'key',
  },
  KeyX: {
    name: 'KeyX', LCaseEng: 'x', UCaseEng: 'X', LCaseRu: 'ч', UCaseRu: 'Ч', className: 'key',
  },
  KeyC: {
    name: 'KeyC', LCaseEng: 'c', UCaseEng: 'C', LCaseRu: 'с', UCaseRu: 'С', className: 'key',
  },
  KeyV: {
    name: 'KeyV', LCaseEng: 'v', UCaseEng: 'V', LCaseRu: 'м', UCaseRu: 'М', className: 'key',
  },
  KeyB: {
    name: 'KeyB', LCaseEng: 'b', UCaseEng: 'B', LCaseRu: 'и', UCaseRu: 'И', className: 'key',
  },
  KeyN: {
    name: 'KeyN', LCaseEng: 'n', UCaseEng: 'N', LCaseRu: 'т', UCaseRu: 'Т', className: 'key',
  },
  KeyM: {
    name: 'KeyM', LCaseEng: 'm', UCaseEng: 'M', LCaseRu: 'ь', UCaseRu: 'Ь', className: 'key',
  },
  Comma: {
    name: 'Comma', LCaseEng: ',', UCaseEng: ',', LCaseRu: 'б', UCaseRu: 'Б', className: 'key',
  },
  Period: {
    name: 'Period', LCaseEng: '.', UCaseEng: '.', LCaseRu: 'ю', UCaseRu: 'Ю', className: 'key',
  },
  Slash: {
    name: 'Slash', LCaseEng: '/', UCaseEng: '/', LCaseRu: '.', UCaseRu: '.', className: 'key',
  },
  ArrowUp: {
    name: 'ArrowUp', LCaseEng: '▲', UCaseEng: '▲', LCaseRu: '▲', UCaseRu: '▲', className: 'key arrow_up',
  },
  ShiftRight: {
    name: 'ShiftRight', LCaseEng: 'Shift', UCaseEng: 'Shift', LCaseRu: 'Shift', UCaseRu: 'Shift', className: 'key shift_right',
  },

  ControlLeft: {
    name: 'ControlLeft', LCaseEng: 'Ctrl', UCaseEng: 'Ctrl', LCaseRu: 'Ctrl', UCaseRu: 'Ctrl', className: 'key control_left',
  },
  MetaLeft: {
    name: 'MetaLeft', LCaseEng: 'Win', UCaseEng: 'Win', LCaseRu: 'Win', UCaseRu: 'Win', className: 'key meta_left',
  },
  AltLeft: {
    name: 'AltLeft', LCaseEng: 'Alt', UCaseEng: 'Alt', LCaseRu: 'Alt', UCaseRu: 'Alt', className: 'key alt_left',
  },
  Space: {
    name: 'Space', LCaseEng: ' ', UCaseEng: ' ', LCaseRu: ' ', UCaseRu: ' ', className: 'key space',
  },
  AltRight: {
    name: 'AltRight', LCaseEng: 'Alt', UCaseEng: 'Alt', LCaseRu: 'Alt', UCaseRu: 'Alt', className: 'key alt_right',
  },
  ArrowLeft: {
    name: 'ArrowLeft', LCaseEng: '◄', UCaseEng: '◄', LCaseRu: '◄', UCaseRu: '◄', className: 'key arrow_left',
  },
  ArrowDown: {
    name: 'ArrowDown', LCaseEng: '▼', UCaseEng: '▼', LCaseRu: '▼', UCaseRu: '▼', className: 'key arrow_down',
  },
  ArrowRight: {
    name: 'ArrowRight', LCaseEng: '►', UCaseEng: '►', LCaseRu: '►', UCaseRu: '►', className: 'key arrow_right',
  },
  ControlRight: {
    name: 'ControlRight', LCaseEng: 'Ctrl', UCaseEng: 'Ctrl', LCaseRu: 'Ctrl', UCaseRu: 'Ctrl', className: 'key control_right',
  },
};

const languages = ['EN', 'RU'];

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

let langCase = (currentLang === 'EN') ? 'LCaseEng' : 'LCaseRu';
Object.keys(keyLayout).forEach((key) => {
  const keyButton = document.createElement('button');
  keyButton.type = 'button';
  keyButton.id = key;
  keyButton.className = keyLayout[key].className;
  keyButton.textContent = keyLayout[key][langCase];
  keyboard.append(keyButton);
});

const keyButtons = document.querySelectorAll('.key');

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'ControlRight') {
    const currentIndex = languages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    currentLang = languages[nextIndex];

    let langCase = (currentLang === 'EN') ? 'LCaseEng' : 'LCaseRu';
    keyButtons.forEach((key) => {
      const id = key.id;
      key.textContent = keyLayout[id][langCase];
    });
  }

  evt.preventDefault();
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('keyboardLanguage', currentLang);
});
