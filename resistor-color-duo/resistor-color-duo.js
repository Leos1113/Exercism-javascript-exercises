export const decodedValue = (values) => {
    if (!values) return;

    const result = values.slice(0,2).map(value => TRANSISTOR[value]).join('');

    return Number(result);
};

const TRANSISTOR = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
}
