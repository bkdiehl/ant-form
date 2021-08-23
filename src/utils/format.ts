export const splitCamelCase = (value: string) => value.split(/(?=[A-Z])/).join(' ');

export const capitalizeFirstLetter = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const toMultipleTitleCase = (value: string) =>
  value
    .split(' ')
    .map((x) => capitalizeFirstLetter(x))
    .join(' ');
