import { sql, db } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
    const client = await db.connect();
    const users = await client.query(`SELECT * FROM users;`)
    // const users = await sql`SELECT * FROM users;`;
    return NextResponse.json(users.rows);
}