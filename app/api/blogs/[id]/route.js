import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Blog from "@/app/models/Blog";

export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        await connect()
        const blog = await Blog.findById(id).exec()
        return new NextResponse(JSON.stringify(blog), { status: 200 })
    } catch (err) {
        return new NextResponse(err.message, { status: 500 })
    }
}