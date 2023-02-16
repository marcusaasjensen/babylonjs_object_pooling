import * as B from "babylonjs";
import { Queue } from "./queue";

export class ObjectPooler {
    private pool: Queue<B.Mesh>;
    private static instance: ObjectPooler;

    constructor(meshToClone: B.Mesh  = new B.Mesh("Mesh"), capacity: number = Infinity) {
        
        this.pool = new Queue<B.Mesh>(capacity);
        for(let i = 0 ; i < capacity ; i++) {
            const mesh : B.Mesh = meshToClone.clone("Mesh" + i);
            mesh.isVisible = false;
            this.pool.enqueue(mesh);
        }

        ObjectPooler.instance = this;
    }

    static getInstance() {
        if(!ObjectPooler.instance)
            ObjectPooler.instance = new ObjectPooler();
        return ObjectPooler.instance;
    }

    spawnFromPool(position: B.Vector3): void {
        const toSpawn = this.pool.dequeue();
        
        if(!toSpawn) return;

        toSpawn.position = position;
        toSpawn.isVisible = true;

        this.pool.enqueue(toSpawn);
    }
}
