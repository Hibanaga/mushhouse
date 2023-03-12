export function getItem(key: string) {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.error(error);
    }
}

export function setItem(key: string, value: string) {
    try {
        return localStorage.setItem(key, value);
    } catch (error) {
        console.error(error);
    }
}

export function removeItem(key: string) {
    try {
        return localStorage.removeItem(key);
    } catch (error) {
        console.error(error);
    }
}
