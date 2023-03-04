// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type DebounceFunction = <F extends (...args: any[]) => any>(func: F, wait: number) => (...args: Parameters<F>) => void;

export const debounce: DebounceFunction = (func, wait) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func(...args);
        }, wait);
    };
};
