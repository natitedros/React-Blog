import {useState} from 'react';

const Home = () => {
    const [btn, setBtn] = useState("HI")
    const handleClick = () => {
        if (btn === "HI"){
            setBtn("BYE");
        }
        else{
            setBtn("HI");
        }
        console.log(btn);
    }

    return ( 
        <div className="home">
            <h2> Homepage </h2>
            <button onClick={handleClick}>{btn}</button>
        </div>
     );
}
 
export default Home;