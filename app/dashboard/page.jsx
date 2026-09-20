const getposts = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}

async function PostPage() {
    const posts = await getposts ()
    console.log(posts)
  return (
    <div>
     <h2>Posts : {posts.length}</h2>
    </div>
  )
}

export default PostPage
