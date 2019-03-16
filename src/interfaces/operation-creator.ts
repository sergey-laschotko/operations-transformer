import { IOperation } from "./operation";

export interface IOperationCreator {
    _data: {
        Level: string;
        Name: string;
        StartData: string;
        FinData: string;
        Elements: string[]
    };
    create: () => IOperation;
}
