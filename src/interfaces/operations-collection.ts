import { IOperation } from "./operation";
import { IOperationsTree } from "./operation-tree";

export interface IOperationsCollection {
    collection: IOperation[];
    add: (operation: IOperation, index?: number) => void;
    remove: (id: string) => void;
    getOperations: () => IOperation[];
    getOperationsTree: (collection: IOperation[]) => IOperationsTree;
    getOperationsDuring: (start: number, end: number) => IOperation[];
}
