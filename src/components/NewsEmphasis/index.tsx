export default function NewsEmphasis() {
    return (
        <section className="w-full h-[30rem] mt-3 px-5 py-4 mb-16 lg:px-44 lg:py-5">
            <section className="w-full h-full bg-blue-500 lg:flex">
                <div className="w-full h-1/2 lg:w-6/12 lg:h-full bg-zinc-800">

                </div>
                <div className="w-full h-1/2 lg:w-6/12 lg:h-full bg-yellow-400">
                    <div className="hidden lg:block lg:w-full lg:h-1/2 bg-lime-500">

                    </div>
                    <div className="w-full h-full flex lg:w-full lg:h-1/2">
                        <div className="w-1/2 h-full bg-pink-500">

                        </div>
                        <div className="w-1/2 h-full bg-pink-400">

                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}