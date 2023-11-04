// setItem(key, value) - tworzy nowy lub aktualizuje istniejący rekord w magazynie.
// getItem(key) - zwraca wartość z kluczem key z magazynu.
// removeItem(key) - usuwa rekord z kluczem key z magazynu.

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("settings", JSON.stringify(settings));

// localStorage.setItem("ui-theme", "dark");

// const theme = localStorage.getItem("ui-theme");
// console.log(theme); // "dark"

// const savedSettings = localStorage.getItem("settings");
// const parsedSettings = JSON.parse(savedSettings);

const save = (settings, value) => {
    try {
      const savedSettings = JSON.stringify(value);
      localStorage.setItem(settings, savedSettings);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  };
  
  const load = settings => {
    try {
      const savedSettings = localStorage.getItem(settings);
      return savedSettings === null ? [] : JSON.parse(savedSettings);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };
  
  const remove = settings => {
    try {
      localStorage.removeItem(settings);
    } catch (error) {
      console.error('Remove state error: ', error.message);
    }
  };
  
  export default {
    save,
    load,
    remove,
  };