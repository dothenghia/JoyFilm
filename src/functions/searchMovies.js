
export default async function searchMovies( name ) {

    const res = await fetch(`https://joyfilm-server.netlify.app/.netlify/functions/actions/search?name=${name}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}