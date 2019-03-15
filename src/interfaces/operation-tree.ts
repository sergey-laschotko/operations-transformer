import { IOperation } from "./operation";

export interface IOperationsTree extends IOperation {
    children: IOperationsTree[];
}