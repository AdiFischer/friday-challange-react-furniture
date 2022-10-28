import { useState } from 'react'

function Furniture() {
    const [furnitureList, setFurnitureList] = useState() //var movie list 
    const getFurniture = () => {
        fetch(`https://mongo-api-deploy-adi-fischer.web.app/furniture`)
            .then(response => response.json())
            .then(setFurnitureList)
            .catch(console.error)
    }

    console.log({furnitureList})
    return (
        <>
            <button onClick={() => getFurniture()}>Get Furniture
            </button>
            <div className="button-list">
                {furnitureList &&
                    furnitureList.map((item) => {
                        return(
                            <>
                         <p key={item.type}>{item.type}</p>
                        <p key={item.type}>{item.type}</p>
                            </>
                        )
                    }
                    )}
            </div>
        </>
    )


}

export default Furniture








