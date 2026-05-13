import { NextResponse } from 'next/server';
import { playersRepository } from '@/backend/repositories/playersRepository';

export async function GET(request: any, { params }: any) {
  try {
    const { id } = await params;
    const item = await playersRepository.getById(id);
    
    if (!item) {
      return NextResponse.json({ success: false, error: 'Item not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: item });
  } catch (error: any) {
    console.error("Error fetching item:", error);
    return NextResponse.json(
      { success: false, error: 'Error fetching item', details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request: any, { params }: any) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    const updatedItem = await playersRepository.update(id, body);
    
    if (!updatedItem) {
       return NextResponse.json({ success: false, error: 'No data to update' }, { status: 400 });
    }
    
    return NextResponse.json({ success: true, data: updatedItem });
  } catch (error: any) {
    console.error("Error updating item:", error);
    return NextResponse.json(
      { success: false, error: 'Error updating item', details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: any, { params }: any) {
  try {
    const { id } = await params;
    await playersRepository.delete(id);
    
    return NextResponse.json({ success: true, message: 'Item deleted successfully' });
  } catch (error: any) {
    console.error("Error deleting item:", error);
    return NextResponse.json(
      { success: false, error: 'Error deleting item', details: error.message },
      { status: 500 }
    );
  }
}
