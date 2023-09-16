
export default async function getPageMovies( type , page ) {

    const res = await fetch(`https://joyfilm-server.netlify.app/.netlify/functions/actions/${type}/${page}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}