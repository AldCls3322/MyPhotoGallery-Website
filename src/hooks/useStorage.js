import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

// Hook is a way to use a chunk of reusable code
const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect( () => {
        const storageRef = projectStorage.ref(file.name)
    }, [file] )
}