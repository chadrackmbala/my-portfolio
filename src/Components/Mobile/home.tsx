import "../../App.css";
import "./first-component";
import FirstComponent from "./first-component";
import SecondComponent from "./second-component";

function LeftSide() {
    return (
        <>
            <div className="h-full">
                <FirstComponent />
                <SecondComponent />
            </div>
        </>
    );
}

export default LeftSide;
