export const setLocalStorage = (key: string, value: any) =>
  localStorage.setItem(key, value)

export const getLocalStorage = (key: string) => localStorage.getItem(key)
