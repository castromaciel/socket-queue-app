import { TicketControl } from "../models/ticket-control.js"

const ticketControl = new TicketControl()

export const socketController = (socket) => {

  socket.emit('last-ticket', `Ticket #${ticketControl.last}`)
  socket.emit('status', ticketControl.lastTickets)

  socket.on('next-ticket', (_, callback) => {
    const next = ticketControl.nextTicket()

    callback(next)

    // TODO: Handle new ticket to serve
  })

  socket.on('serve-ticket', ({ desktop }, callback) => {
    if (!desktop) {
      return callback({
        message: 'Desktop is required',
        status: 'error'
      })
    }

    const servedTicket = ticketControl.serveTicket(desktop)

    socket.broadcast.emit('status', ticketControl.lastTickets)
    
    if (!servedTicket) {
      return callback({
        message: 'There is not pending tickets',
        status: 'error'
      })
    } else {
      return callback({
        ticket: servedTicket,
        status: 'success'
      })
    }
  })
}
