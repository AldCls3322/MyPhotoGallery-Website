import React from 'react';
import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ( {file, setFile}) => {
    const { url, progress } = useStorage(file);

    useEffect(() => { // the next code runs if the 'url' changes, meaning the image was uploaded
        if (url) {
            setFile(null);
        }
    }, [url, setFile]) // we pass url and setFile drom this function

    return (
        <div className="progress-bar" style={{ width: progress + "%" }}></div>
    )
}

export default ProgressBar;