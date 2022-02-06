export const dipdup = {
    uri: {
        graphq: `https://api.hangzhounet.juster.fi/v1/graphql`,
        subscription: "wss://api.hangzhounet.juster.fi/v1/graphql",
    },
}

export const supportedMarkets = {
    "ETH-USD": { target: "Ethereum", description: "Ethereum / US Dollar" },
    "XTZ-USD": { target: "Tezos", description: "Tezos / US Dollar" },
    "BTC-USD": { target: "Bitcoin", description: "Bitcoin / US Dollar" },
}

export const sanity = {
    id: "7iinpn2j",
}

export const rpcNodes = [
    {
        name: "TzKT Hangzhou2net",
        url: "https://rpc.tzkt.io/hangzhou2net",
    },
    {
        name: "SmartPy Granadanet",
        url: "https://granadanet.smartpy.io",
    },
]

export const verifiedMakers = {
    hangzhounet: "tz1U2zsFffCTcTvWddAfHfc2gUvEHepaVT1L",
    mainnet: "tz1h5frRwDbJMGyTPntdwMC8i745q2Z1fzyF",
}
