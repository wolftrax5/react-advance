
const LOCAL_KEY = 'petken'

export const getToken = () => window.localStorage.getItem(LOCAL_KEY)
export const setToken = (value) => window.localStorage.setItem(LOCAL_KEY, value)
export const cleanToken = () => window.localStorage.removeItem(LOCAL_KEY)
