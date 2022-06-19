const BlogList = (props) => {

    const blogs = props.blogs;
    console.log(blogs);
    return (  
        <div className="blog-list">
            <h1 style={{margin:"1rem 0px"}}>{props.title}</h1>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by <span>{blog.author}</span></p>
                    <p style={{color: "blue"}}>{blog.body}</p>
                </div>
            ))} 
        </div>
    );
    
}
 
export default BlogList;