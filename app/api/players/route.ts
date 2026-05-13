import { NextResponse } from 'next/server';
import { playersRepository } from '@/backend/repositories/playersRepository';

export async function GET() {
  try {
    const items = await playersRepository.getAll();
    return NextResponse.json({ success: true, data: items });
  } catch (error: any) {
    console.error("Error fetching items:", error);
    return NextResponse.json(
      { success: false, error: 'Error fetching items', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.name) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      );
    }
    
    const newItem = await playersRepository.create(body);
    
    return NextResponse.json({ success: true, data: newItem }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating item:", error);
    return NextResponse.json(
      { success: false, error: 'Error creating item', details: error.message },
      { status: 500 }
    );
  }
}
