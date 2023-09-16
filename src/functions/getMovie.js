
export default async function getMovie( slug ) {

    const res = await fetch(`https://ophim1.com/phim/${slug}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}