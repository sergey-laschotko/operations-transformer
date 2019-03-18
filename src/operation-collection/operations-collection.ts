import { IOperation } from "../interfaces/operation";
import { IOperationsTree } from "../interfaces/operation-tree";
import { IOperationsCollection } from "../interfaces/operations-collection";

export class OperationsCollection implements IOperationsCollection {
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

    public getOperationsTree(): IOperationsTree {
        let result: IOperationsTree = null;
        let op: IOperationsTree = null;

        function setToLastLevel(obj: IOperationsTree, objToSet: IOperationsTree) {
            if (obj.children.length && obj.children[obj.children.length - 1].level) {
              setToLastLevel(obj.children[obj.children.length - 1], objToSet);
            } else {
              obj.children.push(objToSet);
            }
          }

        function setToLevel(obj: IOperationsTree, objToSet: IOperationsTree) {
            if (objToSet.level - obj.level > 1) {
                setToLevel(obj.children[obj.children.length - 1], objToSet);
            } else {
                obj.children.push(objToSet);
            }
        }

        this.collection.map((operation: IOperation, index: number) => {
            op = { children: [], ...operation };
            if (!result) {
                result = { ...op };
                return;
            } else if (op.level) {
                setToLevel(result, op);
                return;
            } else if (!op.level) {
                setToLastLevel(result, op);
                return;
            }
        });

        return result;
    }

    public getOperationsDuring(start: number, end: number): IOperation[] {
        return this.collection.filter((operation: IOperation) => {
            return operation.start >= start && operation.fin <= end;
        });
    }
}
