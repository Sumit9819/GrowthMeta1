import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get('secret')

    // Validate secret
    if (secret !== process.env.REVALIDATION_SECRET) {
        return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    try {
        // Revalidate content tag with "max" profile (stale-while-revalidate)
        revalidateTag('content', 'max')

        return NextResponse.json({ revalidated: true, now: Date.now() })
    } catch (err) {
        return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 })
    }
}
