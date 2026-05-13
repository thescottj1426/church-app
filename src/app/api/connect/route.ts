import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getIp } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  if (!rateLimit(getIp(req), 3, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  const body = await req.json();
  const { firstName, lastName, email } = body;

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { error: 'First name, last name, and email are required.' },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true });
}
