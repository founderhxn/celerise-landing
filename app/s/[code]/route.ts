// Proxy route to forward /s/:code to Supabase Edge Function
// Adds Authorization header for authenticated access

import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = 'https://jggscqwnnaglziezxjoe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnZ3NjcXdubmFnbHppZXp4am9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5OTgzODUsImV4cCI6MjA3NDU3NDM4NX0.BfEh2MQvbKv-REgy9I5j8ilCCy5Y2iBjweCn7LP2evk';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;

  // Forward request to Supabase Edge Function with auth
  const edgeFunctionUrl = `${SUPABASE_URL}/functions/v1/link-handler/${code}`;

  const response = await fetch(edgeFunctionUrl, {
    headers: {
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'User-Agent': request.headers.get('user-agent') || '',
    },
  });

  const contentType = response.headers.get('content-type') || 'text/html; charset=utf-8';
  const body = await response.text();

  return new NextResponse(body, {
    status: response.status,
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}
