import * as uniqid from "uniqid";

import { IOperation } from "../interfaces/operation";

export class OperationCreator {
    constructor(
        private data: {
            Level: string;
            Name: string;
            StartData: string;
            FinData: string;
            Elements: string[]
        },
    ) {}

    public create(): IOperation {
        return {
            duration: Date.parse(this.data.FinData) - Date.parse(this.data.StartData),
            elements: this.data.Elements,
            fin: Date.parse(this.data.FinData),
            id: uniqid(),
            level: parseInt(this.data.Level, 10) ? parseInt(this.data.Level, 10) : null,
            name: this.data.Name,
            start: Date.parse(this.data.StartData),
        };
    }
}
