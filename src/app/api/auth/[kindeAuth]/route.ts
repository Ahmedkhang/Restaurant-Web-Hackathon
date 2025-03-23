// src/app/api/auth/[kindeAuth]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'Auth route works!' });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({ data: body });
}
