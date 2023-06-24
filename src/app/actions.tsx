'use server'

import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation'

export async function addContact(data) {
    const res = await sql.query(`INSERT INTO contact (email, subject, message) VALUES ('${data.get('email')}','${data.get('subject')}','${data.get('message')}')`);
    redirect('/')
}
