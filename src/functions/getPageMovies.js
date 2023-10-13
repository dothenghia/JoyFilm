
export default async function getPageMovies( type , page ) {

    const res = await fetch(`https://joyfilm-server.netlify.app/.netlify/functions/actions/${type}/${page}`, { next: { revalidate: 18000 } })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}