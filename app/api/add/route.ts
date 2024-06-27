import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { title, slug, description, content } = body;
    if (!title || !slug || !description || !content) return NextResponse.json({ status: "error" }, { status: 400 });
    const blog = await prisma.blog.create({ data: { title, slug, description, content } });
    return NextResponse.json({ status: "success", blog }, { status: 200 });
};