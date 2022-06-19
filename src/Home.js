const Home = () => {
    const handleClick = function(e, name){
        console.log(name + ' says hello!', e.target); 
    }

    return ( 
        <div className="home">
            <h1>Home</h1>
            <button onClick={(e)=>{handleClick(e, "Dove")}}>Click</button>
        </div>
     );
}
 
export default Home;
