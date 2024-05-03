const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/`


export const fetchAllGames = async () => {
    const res = await fetch(`${baseUrl}games`)
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data
}
export const fetchGame = async (slug) => {
    const res = await fetch(`${baseUrl}games/${slug}`)
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data
}

export const fetchAllConsoles = async () => {
    const res = await fetch(`${baseUrl}consoles `)
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data
}
export const fetchConsole = async (slug) => {
    const res = await fetch(`${baseUrl}consoles/${slug}`)
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data
}

export const fetchHeroData = async () => {
    const res = await fetch(`${baseUrl}heroData`)
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data;
}

export const fetchBannerData = async () => {
    const res = await fetch(`${baseUrl}bannerData`)
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data;
}

export const fetchAllBlogs = async () => {
    const res = await fetch(`${baseUrl}blogs`)
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data
}
export const fetchBlog = async (id) => {
    const res = await fetch(`${baseUrl}blogs/${id}`)
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data
}