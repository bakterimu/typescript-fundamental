export const process = (
    value: number | string | boolean,
): number | string | boolean => {
    if (typeof value === 'string') return value.toUpperCase();
    else if (typeof value === 'number') return value + 2;
    else return !value;
};
