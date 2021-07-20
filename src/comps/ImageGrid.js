import React from 'react'
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ( { setSelectedImage } ) => {
    const { docs } = useFirestore('images'); // gets the firestore database data and saves it on the 'docs' variable
    // console.log(docs);
    return (
        <div className="img-grid">
            { docs && docs.map( doc => ( // cycles through the docs data
                <motion.div className="img-wrap" key={doc.id} /* using framer-motion */
                    layout // animates to the new positions, when an image is uploaded
                    whileHover={{ opacity: 1 }} // by framer-motion package
                    onClick={() => setSelectedImage(doc.url)} 
                >
                    <motion.img src={doc.url} alt="uploaded picture" initial={{ opacity: 0 }} animate={{ opacity:1 }} transition={{ delay: 1 }} />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
