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
        }
    ) {}

    create() {
        return {
            id: uniqid(),
            level: this.data.Level,
            name: this.data.Name,
            start: this.data.StartData,
            fin: this.data.FinData,
            duration: Date.parse(this.data.FinData) - Date.parse(this.data.StartData),
            elements: this.data.Elements
        }
    }
}