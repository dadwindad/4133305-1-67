import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const users = [
  { id: 1, username: 'testuser', password: '$2a$10$Hdp2YmMZmOX2bPQjO6V12eBSXJ54B5B5bBPIrV5ZT4PoZHB7wnXpu' } // password is 'password123' hashed
];

const SECRET_KEY = 'PQjO6V12eBSXJ54B5B5bBPIrV5ZT4PoZHB7wnXpu'; // Use a secure key in production

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const user = users.find(u => u.username === username);
  if (!user) {
    return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
  }

  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

  return NextResponse.json({ token });
}
