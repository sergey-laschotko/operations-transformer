import { IOperation } from "../interfaces/operation";

export class Operation implements IOperation {
    constructor(
        public id: string,
        public level: number,
        public name: string,
        public start: number,
        public fin: number,
        public duration: number,
        public elements: string[],
    ) {}

    public getOperation() {
        return {
            duration: this.duration,
            elements: this.elements,
            fin: this.fin,
            id: this.id,
            level: this.level,
            name: this.name,
            start: this.start,
        };
    }

    public get(prop: string) {
        switch (prop) {
            case "id":
                return this.id;
            case "level":
            case "Level":
                return this.level;
            case "name":
            case "Name":
                return this.name;
            case "start":
            case "StartData":
                return this.start;
            case "fin":
            case "FinData":
                return this.fin;
            case "duration":
                return this.duration;
            case "elements":
            case "Elements":
                return this.elements;
            default:
                return `Couldn"t find property ${prop}`;
        }
    }

    public set(prop: string, value: any) {
        switch (prop) {
            case "id":
                this.id = value;
            case "level":
            case "Level":
                this.level = value;
            case "name":
            case "Name":
                this.name = value;
            case "start":
            case "StartData":
                this.start = value;
            case "fin":
            case "FinData":
                this.fin = value;
            case "duration":
                this.duration = value;
            case "elements":
            case "Elements":
                this.elements = value;
            default:
                return `Couldn't find property ${prop}`;
        }
    }
}
