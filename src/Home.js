import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Django website", body:'Lorem ipsum dolor sit amet.', author:"Tali", id: 1},
        {title: "React website", body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam adipisci eum qui asperiores magnam ad nihil rerum hic laborum.', author:"Lover", id: 2},
        {title: "Django & React", body:'Lorem ipsum dolor sit amet.', author:"Rili", id: 3},
        {title: "HTML & CSS website", body:'Lorem ipsum dolor sit amet.', author:"Rili", id: 4},
    ]);

    const handleDelete = function(id) {
       const newBlogs = blogs.filter((blog)=> blog.id !== id);
       setBlogs(newBlogs);
    }
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={"All blogs"} handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author==='Rili')} title={"Written by Rili"} />
            <BlogList blogs={blogs.filter((blog)=> blog.author==='Tali')} title={"Written by Tali"} /> */}
        </div>
     );
}
 
export default Home;
