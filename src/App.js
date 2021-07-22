import React, {useState} from 'react';
import { auth, provider } from "./firebase/config";
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import Upload from './comps/Upload';
import Modal from './comps/Modal';
import SignUp from './comps/SignUp';

function App() {
  const [selectedImage, setSelectedImage] = useState(null); // this is used to enlarge the image when click on the menu
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  return (
    !user ? <SignUp setUser={setUser} />
    :
    <div className="App">
      <Title signOut={signOut} user={user} />
      <Upload/>
      <ImageGrid setSelectedImage={setSelectedImage} /* pass setSelectedImage as prop, and retrieves the selectedImage*/ /> 
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
    </div>
  );
}

export default App;
