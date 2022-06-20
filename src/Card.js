import "./Card.css"

const Card = () => {
    return ( 
        <div className="card-wrapper">
            {/* <div className="card"> */}
                <div className="card-name">
                    Forest Hill
                </div>
                <div className="card-left">
                    <h5>Next</h5>
                    <i class="fa fa-bus" aria-hidden="true"></i>
                </div>
                <div className="card-right">
                    <ul>
                        <li>11:40</li>
                        <li>12:50</li>
                        <li className="now">13:10</li>
                        <li>13:25</li>
                        <li>14:00</li>
                    </ul>
                </div>
            {/* </div> */}
        </div>
     );
}
 
export default Card;
