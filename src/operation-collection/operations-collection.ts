import { IOperation } from "../interfaces/operation";
import { IOperationsTree } from "../interfaces/operation-tree";
import { IOperationsCollection } from "../interfaces/operations-collection";

class OperationsCollection implements IOperationsCollection {
    constructor(public collection: IOperation[]) {}

    public add(operation: IOperation, index?: number): void {
        if (index) {
            this.collection.splice(index, 0, operation);
        } else {
            this.collection.push(operation);
        }
    }

    public remove(id: string): void {
        this.collection = this.collection.filter((operation: IOperation) => {
            return operation.id !== id;
        });
    }

    public getOperations(): IOperation[] {
        return this.collection;
    }

    // public getOperationsTree(collection: IOperation[]): IOperationsTree {
    //     let result: IOperationsTree = null;
    //     let collectionCopy: IOperation[] = [...collection];
    // }

    public getOperationsDuring(start: number, end: number): IOperation[] {
        return this.collection.filter((operation: IOperation) => {
            return operation.start >= start && operation.fin <= end;
        });
    }
}
