export interface ISubject {
    index: number,
    title: string;
    options: Array<IOption>;
    rightId: Array<string>;
}

export interface IOption {
    id: string;
    desc: string;
}