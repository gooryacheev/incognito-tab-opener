// background.js

// Открытие инкогнито вкладки при нажатии на иконку
chrome.action.onClicked.addListener(() => {
  openIncognitoTab();
});

// Функция для открытия инкогнито вкладки
const openIncognitoTab = () => {
  chrome.windows.create({
    url: 'https://www.google.com', // URL для открытия
    incognito: true
  });
};
