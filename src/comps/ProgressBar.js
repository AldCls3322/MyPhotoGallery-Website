import React from 'react';
import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ( {file, setFile}) => {
    const { url, progress } = useStorage(file);

    useEffect(() => { // the next code runs if the 'url' changes, meaning the image was uploaded
        if (url) {
            setFile(null);
        }
    }, [url, setFile]) // we pass url and setFile drom this function

    return (
        <motion.div className="progress-bar" initial={{ width: 0 }} animate={{ width: progress + "%" }}></motion.div>
    )
}

export default ProgressBar;