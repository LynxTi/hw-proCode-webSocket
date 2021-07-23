
// console.log('hellosssssss');

const socket = new WebSocket('ws://localhost:8000');

const form = document.forms.test;

form.addEventListener ('submit', (ev) => {
    ev.preventDefault();
    console.log(123123213123);
    const formData = new FormData(ev.target)
    const userName = formData.get('username');
    console.log('uesr:' , userName);
    socket.send(userName)
})

// socket.addEventListener('open', (ev)=> {
//     socket.send('Hello web socket server')
// });

// socket.addEventListener('message', (ev) => {
//     console.log('Mesegge from server: ', ev.data);
// })