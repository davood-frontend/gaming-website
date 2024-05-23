const baseUrl = `https://gaming-shop-backend.vercel.app/api/`


export const fetchAllGames = async () => {
    const res = await fetch(`${baseUrl}games`, { cache: 'no-cache' })
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data
}
export const fetchGame = async (slug) => {
    const res = await fetch(`${baseUrl}games/${slug}`, { cache: 'no-cache' })
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data
}

export const fetchAllConsoles = async () => {
    const res = await fetch(`${baseUrl}consoles `, { cache: 'no-cache' })
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data
}
export const fetchConsole = async (slug) => {
    const res = await fetch(`${baseUrl}consoles/${slug}`, { cache: 'no-cache' })
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data
}

export const fetchHeroData = async () => {
    const res = await fetch(`${baseUrl}heroData`, { cache: 'no-cache' })
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data;
}

export const fetchBannerData = async () => {
    const res = await fetch(`${baseUrl}bannerData`, { cache: 'no-cache' })
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data;
}

export const fetchAllBlogs = async () => {
    const res = await fetch(`${baseUrl}blogs`, { cache: 'no-cache' })
    if (!res.ok) {
        throw new Error('failed to fetch data from API')
    }
    const data = await res.json()
    return data
}
export const fetchBlog = async (id) => {
    try {
        const res = await fetch(`${baseUrl}blogs/${id}`, { cache: 'no-cache' })
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err);
    }
}