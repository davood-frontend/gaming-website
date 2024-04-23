import connect from "@/app/utils/db"
import { NextResponse } from "next/server"
import Hero from "@/app/models/Hero"
export const GET = async () => {
    try {
        await connect()
        const heroData = await Hero.find()
        return new NextResponse(JSON.stringify(heroData), { status: 200 })
    } catch (err) {
        return new NextResponse(err, { status: 500 })
    }
}