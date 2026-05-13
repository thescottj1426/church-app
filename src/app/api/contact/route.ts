import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getIp } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  if (!rateLimit(getIp(req), 5, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true });
}
