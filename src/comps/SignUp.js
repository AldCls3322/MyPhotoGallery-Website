import React from 'react'
import { auth, provider } from '../firebase/config';
import image from '../imgs/galeria-foto.jpg';

function SignUp(props) {
    
    const signIn = () => {
        auth.signInWithPopup(provider)  //it shows that there will be a signin
        .then((result)=>{   //once recieved the signin data or = 'result'
            const newUser = {
                name: result.user.displayName,  //inside the data of 'result' of the google account, you can recieve the name and image, so we save them.
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser)); //it only accepts JSON strings to use setItem.
            props.setUser(newUser); //'newUser' recieved from App.js
        })
        .catch((error)=>{   //if the signin was unsuccessfull
            alert(error.message)
        })
    }

    return (
        <div className="signin">
            <img src={image} alt="Sign Up Logo"/>
            <h1>Sign in to the Photo Gallery</h1>
            <button onClick={()=>signIn()}>
                Sign In With Google
            </button>
        </div>
    )
}

export default SignUp
