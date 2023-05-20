const desktopLabel = document.querySelector('h1')
const serveButton = document.querySelector('button')
const ticketLabel = document.querySelector('small')
const alertMessage = document.querySelector('.alert')


const search = window.location.search
const searchParams = new URLSearchParams(search)

if (!searchParams.has('desktop')) {
  window.location = 'index.html'
  throw new Error('Desktop is required')
}

const desktop = searchParams.get('desktop')
desktopLabel.innerHTML = desktop

alertMessage.style.display = 'none'

const socket = io()

socket.on('connect', () => {
  serveButton.disabled = false
})

socket.on('disconnect', () => {
  serveButton.disabled = true
})

socket.on('last-ticket', lastTicket => {
  // newTicketLabel.innerText = lastTicket
})

serveButton.addEventListener('click', () => {
  socket.emit('serve-ticket', { desktop }, ({ status, message, ticket }) => {

    if (status === 'error') {
      ticketLabel.innerText = `nobody`
      return alertMessage.style.display = ''
    }

    ticketLabel.innerText = `Ticket ${ticket.number}`
  })
})
