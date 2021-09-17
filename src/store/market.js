import { defineStore } from "pinia"

export const useMarketStore = defineStore({
    id: "market",

    state() {
        return {
            isSymbolsLoaded: false,
            symbols: {
                "BTC-USD": {
                    events: [],
                    quotes: [],
                    historyPrice: 0,
                },
                "ETH-USD": {
                    events: [],
                    quotes: [],
                    historyPrice: 0,
                },
                "XTZ-USD": {
                    events: [],
                    quotes: [],
                    historyPrice: 0,
                },
            },
        }
    },
    actions: {
        setSymbol({ target, symbol }) {
            this.symbols[target] = { ...this.symbols[target], ...symbol }
        },

        setQuotes({ target, quotes }) {
            this.symbols[target].quotes = [...quotes]
        },
        clearQuotes() {
            Object.keys(this.symbols).forEach(symbol => {
                this.symbols[symbol].quotes = []
            })
        },

        setHistoryPrice({ target, price }) {
            this.symbols[target].historyPrice = price
        },

        updateEvent({ target, newEvent }) {
            if (!target || !this.symbols[target].events.length) return

            let event = this.symbols[target].events.find(
                event => event.id == newEvent.id,
            )
            const indexOfEvent = this.symbols[target].events.indexOf(event)

            /** todo: store mixed events regardless of the currency pair */
            if (!event) return

            if (event.status !== newEvent.status) {
                this.symbols[target].events.splice(indexOfEvent, 1)
            } else {
                this.symbols[target].events[indexOfEvent] = {
                    ...event,
                    winner_bets: newEvent.winner_bets,
                    start_rate: newEvent.start_rate,
                    closed_rate: newEvent.closed_rate,
                    pool_below: newEvent.pool_below,
                    pool_above_eq: newEvent.pool_above_eq,
                    total_liquidity_provided: newEvent.total_liquidity_provided,
                    total_liquidity_shares: newEvent.total_liquidity_shares,
                    total_value_locked: newEvent.total_value_locked,
                }
            }
        },
        updateQuotes({ target, quote }) {
            if (quote.timestamp == this.symbols[target].quotes[0].timestamp)
                return

            this.symbols[target].quotes.unshift(quote)
        },
    },
})
