export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
export const NEXT_PUBLIC_SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY
export const NEXT_PUBLIC_NAVER_KEY = process.env.NEXT_PUBLIC_NAVER_MAP_KEY
export const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
export const DEFAULT_AVATARS_BUCKET = 'avatars'

export type Profile = {
    id: string
    avatar_url: string
    username: string
    website: string
    updated_at: string
}