export const getLocalData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };
  
  export const setLocalData = (key, items) => {
    localStorage.setItem(key, JSON.stringify(items));
  };
  
