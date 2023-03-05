export type NumSize = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Xl = 'xl';
export type NumXl = `${NumSize}${Xl}`;
export type NonXlSizes = 'lg' | 'base' | 'sm' | 'xl' | 'xs';
export type Size = NumXl | Xl | NonXlSizes;
export type TextSize = `text-${Size}`