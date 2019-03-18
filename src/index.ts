import * as dataSource from "./data-source.json";

import { IInitialOperation } from "./interfaces/initial-operation";
import { IOperation } from "./interfaces/operation";
import { OperationsCollection } from "./operation-collection/operations-collection";
import { OperationCreator } from "./operation-creator/operation-creator";
import { Operation } from "./operation/operation";

const data: { keys: string[], rows: string[][] } = { ...dataSource };
const operations: IInitialOperation[] = [];
data.rows.map((operation: string[]) => {
    const op: any = {};
    for (let i = 0; i < operation.length; i++) {
        op[data.keys[i]] = operation[i];
    }
    operations.push(op);
});

const transformedOps: IOperation[] = [];

operations.map((operation: IInitialOperation) => {
    const op = new OperationCreator(operation).create();
    transformedOps.push(new Operation(op));
});

const collection = new OperationsCollection(transformedOps);

const tree = collection.getOperationsTree();
