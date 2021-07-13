import { useState, useEffect } from "react"; // these are our hooks
import { projectStorage } from "../firebase/config";

// Hook is a way to use a chunk of reusable code
const useStorage = (file) => { // recieves a 'file' as parameter
    const [progress, setProgress] = useState(0); // for tracking progress upload
    const [error, setError] = useState(null);   // for errors handling from upload
    const [url, setUrl] = useState(null);   // image url that recieves from storage after being uploaded

    useEffect( () => { // everytime '[file]' changes, it will run the next code
        // REFERENCES
        const storageRef = projectStorage.ref(file.name)    // creates a reference to a file inside default firebase storage bucket, creating it with the name of the file the user selected
        // sub-functions:
        storageRef.put(file).on('state_chnaged', (snap) => {    // uploads file to 'projectStorage.ref(file.name)' when a file is selected by the user, if so then i creates a snap object
            // snapshot in time of the file
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100;
            setProgress(percentage); // updates percentage of upload
        }, (err) => { // recieves an argument that we use for error
            setError(err);
        }, async () => { // async function to use 'await'
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })

    }, [file] );
    
    return { process, url, error }
}

export default useStorage;