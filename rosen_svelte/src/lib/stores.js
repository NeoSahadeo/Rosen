import { writable, get, readonly } from 'svelte/store';

const messagesFunc = () => {
    const { subscribe, set, update } = writable();
    set([])

    const send = (message, status, preserve = 3000) => {
        // Preserve = 0 is has no expiry
        update(value => {
            const returnObject = {
                        message,
                        status,
                        id: Math.random()
            }
            // Avoids spreading empty array
            return (value.length > 0) ? [...value, returnObject] : [returnObject]
        })
        if (preserve !== 0)
        {
            setTimeout(()=>{
                update(value => {
                    value.pop();
                    return value
                })
            }, preserve)
        }
    }

    const remove = (id) => {
        update(value => {
            let globalIndex;
            value.forEach((element, index)=> {
                if(element.id === id)
                {
                    globalIndex = index
                }
            });
            value.splice(globalIndex, 1)
            return value
        })
    }

    return {
        subscribe,
        set,
        send,
        remove,
        reset: ()=>set(0)
    }
}
const messages = messagesFunc()

export { messages }