import connect from "@/app/utils/db"
import Blog from "@/app/models/Blog"
import { NextResponse } from "next/server"

export const GET = async (request) => {
    try {
        await connect()
        const blogs = await Blog.find({});
        return new NextResponse(JSON.stringify(blogs), { status: 200 })
    } catch (err) {
        return new NextResponse('Api Error', { status: 500 })
    }
}