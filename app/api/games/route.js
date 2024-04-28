import connect from "@/app/utils/db"
import { NextResponse } from "next/server"
import Game from "@/app/models/Game"

export const GET = async (request) => {
    try {
        await connect()
        const games = await Game.find()
        return new NextResponse(JSON.stringify(games), { status: 200 })
    } catch (err) {
        return new NextResponse('Api error', { status: 500 })
    }
}