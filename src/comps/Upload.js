import React, {useState} from 'react';

const Upload = () => {

    const [file, setFile] = useState(null); // state hook, sets useState as null because initialize there is no file
    const [error, setError] = useState(null);

    const type = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => { // 'e' means OnEvent
        let selectedImg = e.target.files[0]; // gets the first file from the selected files the user place (each changing with 'onChange')
        // console.log(selectedImg);
        if (selectedImg && type.includes(selectedImg.type)) { // if there is a non-empty file selected... and it checks if the uploaded file is an image
            setFile(selectedImg);
            setError('');
        } else {
            setFile(null);
            setError('You must select an image file (.png or .jpeg)');
        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                { error && <div className="error">{error}</div> }
                { file && <div>{file.name}</div> }
            </div>
        </form>
    )
}

export default Upload;