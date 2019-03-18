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

    public getDateMs(date: string) {
        const dateParts = date
            .split(/(\.|:|\s)/)
            .map((p: string) => parseInt(p, 10))
            .filter((p: number) => p > -1);
        return +new Date(dateParts[2], dateParts[1] - 1, dateParts[0], dateParts[3], dateParts[4]);
    }

    public create(): IOperation {
        return {
            duration: this.getDateMs(this.data.FinData) - this.getDateMs(this.data.StartData),
            elements: this.data.Elements,
            fin: this.getDateMs(this.data.FinData),
            id: uniqid(),
            level: parseInt(this.data.Level, 10) ? parseInt(this.data.Level, 10) : null,
            name: this.data.Name,
            start: this.getDateMs(this.data.StartData),
        };
    }
}
