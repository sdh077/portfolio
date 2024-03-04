import { supabase } from '@/lib/api'
import ChatPage from './chat'
import Webcam from './webcam'

export default async function page() {
    const channels = supabase.getChannels()


    return (
        <div>
            <ChatPage />
            {/* <Webcam /> */}
        </div>
    )
}
