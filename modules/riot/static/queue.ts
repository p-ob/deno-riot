import { StaticApiBase } from "./base.ts"
import { Queue } from "../models/queue.ts";
import type { IQueue } from "../models/queue.ts";

export class QueueApi extends StaticApiBase {
	#filename = "queues.json";

	async getQueue(id: number): Promise<Queue | undefined> {
		const queues = await this.getQueues();
		const q = queues.find(x => x.queueId === id);
		return q ? new Queue(q) : undefined;
	}

	async getQueueByName(name: string): Promise<Queue | undefined> {
		const queues = await this.getQueues();
		const q = queues.find(x => x.description?.toLowerCase() === name.toLowerCase());
		return q ? new Queue(q) : undefined;
	}

	async getQueues(): Promise<Queue[]> {
		const queues = await this.get(this.#filename);
		return (queues as IQueue[]).map(x => new Queue(x));
	}
}
