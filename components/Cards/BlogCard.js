const BlogCard = () => {
    return (
        <div>
            <div className="blog-card2">
                <div className="bg-neutral w-full py-5 px-3">
                    <div className="flex items-center">
                        <span className="px-3 py-1 bg-primary">Portfolio</span>
                        <small className="ml-5 text-accent text-sm">Apr 06, 2022</small>
                    </div>
                    <h2 className="text-xl mt-4">
                        Best 20 useful tools for people <br /> who
                        like to spend time in ...
                    </h2>
                    <button className="my-3 py-1 border-b-2 hover:border-neutral text-primary border-primary transition delay-300 ">Read More
                        <i className="fa-solid fa-arrow-right ml-3"></i>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default BlogCard;