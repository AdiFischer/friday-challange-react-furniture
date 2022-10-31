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
                <table>
                    <tr>
                 <th>Type</th>
                        <th>Price</th>
                    </tr>
                {furnitureList &&
                    furnitureList.map((item) => {
                        return(
                            <tr>
                                <td>{item.type}</td> 
                                <td>{item.price}</td>
                            </tr>
                        )
                    }
                    )}
                    </table>
            </div>
        </>
    )


}

export default Furniture








