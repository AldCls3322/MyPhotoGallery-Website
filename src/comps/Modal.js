import React from 'react'

const Modal = ( { selectedImage, setSelectedImage } ) => {

    const handleClick = (e) => { // for when the user clicks on the darkened div, it will close the 'Modal' component a.k.a the enlarged image
        if (e.target.classList.contains('backdrop')) { // if you click the background then the 'selectedImage' value will become null and therefore quit the 'Modal' component, if the user clicks other than the drakend div (background) then nothing will happen
            setSelectedImage(null)
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImage} alt="enlarged picture" />
        </div>
    )
}

export default Modal
