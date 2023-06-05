export default function Cards( { post } : {post : any}) {
    return (
        <section className="w-full h-56  flex flex-col px-5 lg:h-28 lg:flex-row">
            <div className="w-full h-28 lg:w-3/12">
                <img src={post.urlToImage} alt="" className="w-full h-full" />
            </div>
            <div className="w-full h-full bg-red-600 py-2 px-1 lg:w-9/12">
                <h1 className="font-inter text-[16px]">{post.title}</h1>
            </div>
        </section>
    )
}
