export const START_COUTNT = 1;

export enum COLORS{
    red,
    blue,
    green,
    yellow,
    purple,
    orange
}

export const sleep = async (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time));
};