import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Message } from "./interfaces";

function Messenger(): any
{
  const { subscribe, set, update } = writable();
  set([])

  const send = ({message, classes='', styles='', timeout=5000}: Message) => {
    // creates messages
    const id = Math.random()
    update((v) => {
      let value = <Message[]>v
      const compose = { id, message, classes, styles };
      return value.length > 0 ? value = [...value, compose] : [compose]
    })


    if (timeout != 0)
    {
      setTimeout(()=>{
	close(id)
      }, timeout)
    }
  }

  // removes messages
  const close = (id: number) => {
    update((v)=> {
      let value = <Message[]>v
      let globalIndex = 0;
      value.forEach(element => {
	if (element.id === id) {
	  value.splice(globalIndex, 1)
	}
	globalIndex++;
      })
      return value
    })
  }

  const clear = () => {
    set([])
  }

  return {
    subscribe,
    clear,
    close,
    send
  }
}
const messages = Messenger()

export { messages }
