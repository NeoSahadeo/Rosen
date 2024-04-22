const icons = 
[
    {
        name: 'upvote',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><path fill="#ffffff" d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12z"/></svg>'
    },
    {
        name: 'upvoteFilled',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z" fill="#ffffff"/></svg>'
    },
    {
        name: 'downvote',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 24 24"><path fill="#ffffff" d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059M12 19.399L6.081 12H10V4h4v8h3.919z"/></svg>'
    },
    {
        name: 'downvoteFilled',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 24 24"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z" fill="#ffffff"/></svg>'
    },
    {
        name: 'search',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 24 24"><path fill="#ffffff" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>'
    },
    {
        name: 'comments',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 24 24"><path fill="#ffffff" d="M19 8h-1V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a1 1 0 0 0 .62.92A.84.84 0 0 0 3 18a1 1 0 0 0 .71-.29l2.81-2.82H8v1.44a3 3 0 0 0 3 3h6.92l2.37 2.38A1 1 0 0 0 21 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 22 21V11a3 3 0 0 0-3-3M8 11v1.89H6.11a1 1 0 0 0-.71.29L4 14.59V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3h-5a3 3 0 0 0-3 3m12 7.59l-1-1a1 1 0 0 0-.71-.3H11a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z"/></svg>'
    },
    {
        name: 'menu',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 24 24"><path fill="#ffffff" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"/></svg>'
    },
    {
        name: 'dot',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 256 256"><path fill="#ffffff" d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg>'
    },
    {
        name: 'share',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 24 24"><path fill="#ffffff" d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12t.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2t2.125.875T21 5t-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12t-.025.363t-.075.337l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19t-.875 2.125T18 22"/></svg>'
    },
    {
        name: '3-dots-h',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16"><path fill="#ffffff" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/></svg>'
    },
    {
        name: 'add', 
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>'
    },
    {
        name: 'messages',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><path fill="#ffffff" d="m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18z"/></svg>'
    },
    {
        name: 'notifications',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><path fill="#ffffff" d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"/></svg>'
    },
    {
        name: 'close',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><path fill="#ffffff" d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"/></svg>'
    },
]


export default icons