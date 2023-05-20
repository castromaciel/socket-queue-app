const desktopLabel = document.querySelector('h1')
const serveButton = document.querySelector('button')
const ticketLabel = document.querySelector('small')
const alertMessage = document.querySelector('.alert')
const pendingLabels = document.querySelector('#pendingLabels')


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

socket.on('pending-tickets', pendingTickets => {
  if (pendingTickets === 0) {
    pendingLabels.style.display = 'none'
    alertMessage.style.display = ''
  } else {
    alertMessage.style.display = 'none'
    pendingLabels.style.display = ''
    pendingLabels.innerText = pendingTickets
  }
})

serveButton.addEventListener('click', () => {
  socket.emit('serve-ticket', { desktop }, ({ status, ticket }) => {

    if (status === 'error') {
      ticketLabel.innerText = `nobody`
      return alertMessage.style.display = ''
    }

    ticketLabel.innerText = `Ticket ${ticket.number}`
  })

  socket.on('pending-tickets', pendingTickets => {
    pendingLabels.innerText = pendingTickets
  })

})
