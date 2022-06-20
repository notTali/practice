const BlogList = (props) => {

    const blogs = props.blogs;
   /// console.log(blogs);

    

    return (  
        <div className="blog-list">
            <h1 style={{margin:"1rem 0px"}}>{props.title}</h1>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <div className="blog-data">
                        <h2>{blog.title}</h2>
                        <p>Written by <span>{blog.author}</span></p>
                        <p style={{color: "blue"}}>{blog.body}</p>
                    </div>
                    <button className="delete" onClick={()=> props.handleDelete(blog.id)}>Delete</button>
                </div>
            ))} 
        </div>
    );
    
}
 
export default BlogList;