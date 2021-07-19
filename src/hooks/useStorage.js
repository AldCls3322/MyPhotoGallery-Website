import { useState, useEffect } from "react"; // these are our hooks
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";

// Hook is a way to use a chunk of reusable code
const useStorage = (file) => { // recieves a 'file' as parameter
    const [progress, setProgress] = useState(0); // for tracking progress upload
    const [error, setError] = useState(null);   // for errors handling from upload
    const [url, setUrl] = useState(null);   // image url that recieves from storage after being uploaded

    useEffect( () => { // everytime '[file]' changes, it will run the next code
        // REFERENCES
        const storageRef = projectStorage.ref(file.name)    // creates a reference to a file inside default firebase storage bucket, creating it with the name of the file the user selected
        const collectionRef = projectFirestore.collection('images'); // searches for the collection named 'images' in database, however if it doesn't exist, it creates one.

        // SUB-FUNCTIONS:
        storageRef.put(file).on('state_chnaged', (snap) => {    // uploads file to 'projectStorage.ref(file.name)' when a file is selected by the user, if so then i creates a snap object
            // snapshot in time of the file
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100;
            setProgress(percentage); // updates percentage of upload
        }, (err) => { // recieves an argument that we use for error
            setError(err);
        }, async () => { // async function to use 'await'
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp(); // the variable 'createdAt' is saved as a timestamp value
            collectionRef.add({ url, createdAt }) // adds the file to the database, as 'url' is written the same, it is not necessary to write: 'url: url'.
            setUrl(url);
        })

    }, [file] );
    
    return { progress, url, error }
}

export default useStorage;