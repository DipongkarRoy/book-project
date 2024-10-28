const getAllPosts = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`)
    if(!res.ok){
        throw new Error(`Failed to fetch posts.`)
    }
    return await res.json()
}

export default getAllPosts ;