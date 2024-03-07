import { supabase } from "@/lib/api"

export async function GET() {

    let { data, error } = await supabase
        .from('product')
        .select('*')

    return Response.json({ data })
}