import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => { // receives the collection 'images'
    const [ docs, setDocs ] = useState([]);
    
    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc') // sorts the database info to read according to the newest from timestamp property
            .onSnapshot((snap) => { // use 'onSnapshot' to get all information of the firebase data in that instant, and repeates this function everytime the database data changes
                let document = []; // creates an array of objects that are our images images
                snap.forEach(doc => {
                    document.push({...doc.data(), id: doc.id}) // adds the data and id of each image in the database and saves it on the previously created array called 'document'
                });
                setDocs(document); // places the document array onto the 'docs' created in line 5
            });
        return () => unsub(); // this is to return a cleanup function that unsubscribes from the collection, this way we can invoke unsub function
    }, [collection]) // the dependecies that changes are written inside the '[]', this case its 'collection'

    return { docs };
}

export default useFirestore;
