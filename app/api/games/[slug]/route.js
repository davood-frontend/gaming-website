import connect from "@/app/utils/db"
import { NextResponse } from "next/server"
import Game from "@/app/models/Game"

export const GET = async (request, { params }) => {
    const { slug } = params
    console.log(slug);
    try {
        await connect()
        const games = await Game.findOne({ slug: slug })
        return new NextResponse(JSON.stringify(games), { status: 200 })
    } catch (err) {
        return new NextResponse(err.message, { status: 500 })
    }
}