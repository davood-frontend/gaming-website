import connect from "@/app/utils/db"
import { NextResponse } from "next/server"
import Banner from "@/app/models/Banner"
export const GET = async () => {
    try {
        await connect()
        const bannerData = await Banner.find()
        return new NextResponse(JSON.stringify(bannerData), { status: 200 })
    } catch (err) {
        return new NextResponse('Api Error', { status: 500 })
    }
}