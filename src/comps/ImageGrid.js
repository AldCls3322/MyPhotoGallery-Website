import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = ( { setSelectedImage } ) => {
    const { docs } = useFirestore('images'); // gets the firestore database data and saves it on the 'docs' variable
    // console.log(docs);
    return (
        <div className="img-grid">
            { docs && docs.map( doc => ( // cycles through the docs data
                <div className="img-wrap" key={doc.id} onClick={() => setSelectedImage(doc.url)}>
                    <img src={doc.url} alt="uploaded picture" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
