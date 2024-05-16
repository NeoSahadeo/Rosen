import { messages } from "./stores";
import type { Message } from "./interfaces";

export default class Messenger {
	set: (x: any) => void;
	update: (x: any) => any;
	constructor() {
		const { subscribe, set, update } = messages;
		this.set = set;
		this.set([])
		this.update = update
	}

	send({ message = '', classes = '', styles = '', timeout = 5000 }: Partial<Message>) {
		const id = Math.random()
		this.update((value: Message[]) => {
			const compose: Message = { id, message, classes, styles };
			return value.length > 0 ? value = [...value, compose] : [compose]
		})
		if (timeout != 0) {
			setTimeout(() => {
				this.close(id)
			}, timeout)
		}
	}

	close = (id: number) => {
		this.update((value: Message[]) => {
			let globalIndex = 0;
			value.forEach((element: Message) => {
				if (element.id === id) {
					value.splice(globalIndex, 1)
				}
				globalIndex++;
			})
			return value
		})
	}
}
