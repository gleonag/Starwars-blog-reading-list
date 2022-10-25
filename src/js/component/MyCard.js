import React from "react";
import { useHistory } from "react-router";

const MyCard = () => {
    const{imagen, descripcion, id} = props;

        const history = useNavigate();



    const handleClick = () => {
        history.push(`/${id}`)

    }

    return (

        <div className="col text-center mt-5">
        <div className="card">
        <img src={imagen} className="card-img-top" alt="..."></img>
            <div className="card-body bg-black">
                <p className="card-text text-white">{descripcion}</p>
            </div>
            <button onClick={handleClick}>Ir a la descripcion</button>
        </div>
        </div>
    )

}
export default MyCard