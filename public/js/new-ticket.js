const newTicketLabel = document.querySelector('#newTicketLabel')
const newTicketButton = document.querySelector('button')

const socket = io()

socket.on('connect', () => {
  newTicketButton.disabled = false
})

socket.on('disconnect', () => {
  newTicketButton.disabled = true
})

socket.on('last-ticket', lastTicket => {
  newTicketLabel.innerText = lastTicket
})

newTicketButton.addEventListener('click', () => {
  socket.emit('next-ticket', null, (ticket) => {
    newTicketLabel.innerText = ticket
  })
})