import { apollo } from "@/apollo"

/**
 * GQL: Queries
 */
import { getMarkets } from "@/graphql/queries/markets"

export const fetchMarkets = async () => {
    try {
        const { data } = await apollo.query({ query: getMarkets })
        return data.currencyPair
    } catch (error) {
        console.error(
            `Error during fetching markets \n\n ${error.name}: ${error.message}`,
        )
        return []
    }
}
