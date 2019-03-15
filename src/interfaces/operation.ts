export interface IOperation {
    id: string;
    level: number;
    name: string;
    start: number;
    fin: number;
    duration: number;
    elements: string[];
}