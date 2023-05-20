const desktopLabel = document.querySelector('h1')
const serveButton = document.querySelector('button')

const search = window.location.search
const searchParams = new URLSearchParams(search)

if (!searchParams.has('desktop')) {
  window.location = 'index.html'
  throw new Error('Desktop is required')
}

const desktop = searchParams.get('desktop')
desktopLabel.innerHTML = desktop

const socket = io()

socket.on('connect', () => {
  serveButton.disabled = false
})

socket.on('disconnect', () => {
  serveButton.disabled = true
})

socket.on('send-message', (payload) => {
  console.log('From Server', payload)
})

socket.on('last-ticket', lastTicket => {
  // newTicketLabel.innerText = lastTicket
})

serveButton.addEventListener('click', () => {
  // socket.emit('next-ticket', null, (ticket) => {
  //   newTicketLabel.innerText = ticket
  // })
})