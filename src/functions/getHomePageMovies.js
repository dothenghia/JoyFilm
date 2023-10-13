
export default async function getHomePageMovies() {

    const res = await fetch('https://joyfilm-server.netlify.app/.netlify/functions/actions', { next: { revalidate: 18000 } })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
    
}