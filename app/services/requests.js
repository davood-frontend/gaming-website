import { revalidatePath } from "next/cache"

const baseUrl = `https://gaming-shop-backend.vercel.app/api/`


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
    try {
        const res = await fetch(`${baseUrl}blogs/${id}`)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err);
    }
}