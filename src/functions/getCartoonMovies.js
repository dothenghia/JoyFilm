
export default async function getCartoonMovies(page) {

    const res = await fetch(`https://joyfilm-server.netlify.app/.netlify/functions/actions/cartoon/${page}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}