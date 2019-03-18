import * as dataSource from "./data-source.json";

import { Operation } from "./operation/operation";
import { OperationCreator } from "./operation-creator/operation-creator";
import { OperationsCollection } from "./operation-collection/operations-collection";
import { IInitialOperation } from "./interfaces/initial-operation";
import { IOperation } from "./interfaces/operation";

const data: { keys: string[], rows: string[][] } = { ...dataSource };
const operations: IInitialOperation[] = [];
data.rows.map((operation: string[]) => {
    let op: any = {};
    for (let i = 0; i < operation.length; i++) {
        op[data.keys[i]] = operation[i];
    }
    operations.push(op);
}); 

const transformedOps: IOperation[] = [];

operations.map((operation: IInitialOperation) => {
    let op = new OperationCreator(operation).create();
    transformedOps.push(new Operation(op));
});

const collection = new OperationsCollection(transformedOps);

let tree = collection.getOperationsTree();

console.log(tree.children[1]);