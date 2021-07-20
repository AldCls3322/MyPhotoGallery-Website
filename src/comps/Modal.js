import React from 'react'
import { motion } from 'framer-motion'

const Modal = ( { selectedImage, setSelectedImage } ) => {

    const handleClick = (e) => { // for when the user clicks on the darkened div, it will close the 'Modal' component a.k.a the enlarged image
        if (e.target.classList.contains('backdrop')) { // if you click the background then the 'selectedImage' value will become null and therefore quit the 'Modal' component, if the user clicks other than the drakend div (background) then nothing will happen
            setSelectedImage(null)
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
            <motion.img src={selectedImage} alt="enlarged picture" initial={{ y: "-100vh" }} animate={{ y: 0 }} />
        </motion.div>
    )
}

export default Modal
