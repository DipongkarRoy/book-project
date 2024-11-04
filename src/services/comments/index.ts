import { delay } from "@/components/utils/delay";

export const getComments = async(postId:string ,wait=false) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comments?postId=${postId}`)
    if(!res.ok){
        throw new Error(`Failed to fetch data comments.`);
    }

    if(wait){
        delay(2000);
    }
    return res.json();
}