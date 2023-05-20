import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import data from '../../db/data.json' assert { type: "json" };

class Ticket {
  constructor(number, desktop) {
    this.number = number
    this.desktop = desktop
  }
}

export class TicketControl {
  constructor() {
    this.last = 0
    this.today = new Date().getDate()
    this.tickets = []
    this.lastTickets = []

    this.init()
  }

  get toJson() {
    return {
      last: this.last,
      today: this.today,
      tickets: this.tickets,
      lastTickets: this.lastTickets
    }
  }

  init() {
    const { today, last, tickets, lastTickets } = data
    if (today === this.today) {
      this.last = last
      this.tickets = tickets
      this.lastTickets = lastTickets
    } else {
      this.saveDB()
    }
  }

  saveDB() {
    const __filename = fileURLToPath(import.meta. url);
    const __dirname = path.dirname(__filename);
    
    const dbPath = path.join(__dirname, '../../db/data.json')
    fs.writeFileSync(dbPath, JSON.stringify( this.toJson ))
  }

  nextTicket() {
    this.last += 1
    const ticket = new Ticket(this.last, null)

    this.tickets.push(ticket)
    this.saveDB()
    return `Ticket #${ticket.number}`
  }

  serveTicket(desktop) {
    if (!this.tickets.length) {
      return null
    }
    
    const currentTicket = this.tickets.shift()
    currentTicket.desktop = desktop

    this.lastTickets.unshift(currentTicket)

    if (this.lastTickets.length > 4) {
      this.lastTickets.splice(-1, 1)
    }

    console.log(this.lastTickets)
    this.saveDB()
    return currentTicket
  }

}