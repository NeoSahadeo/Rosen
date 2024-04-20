import { writable, get, readonly } from 'svelte/store';

const messagesFunc = () => {
    const { subscribe, set, update } = writable();
    set([])

    const send = (message, status, preserve = 3000) => {
        update(value => [...value, {message, status}])
        setTimeout(()=>{
            update(value => {
                value.pop();
                return value
            })
        }, preserve)
    }

    return {
        subscribe,
        set,
        send,
        reset: ()=>set(0)
    }
}
const messages = messagesFunc()

export { messages }