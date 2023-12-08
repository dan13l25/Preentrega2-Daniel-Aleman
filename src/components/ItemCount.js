import { useState } from "react";

const Itemcount = () => {
    const [count, setCount] = useState (1);
    const handleResta = () => {
        count > 1 && setCount(count - 1)
    }
    const handleSuma = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <div className="itemCount">

            </div>
        </div>
    )
}