import React, {useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import Upload from './comps/Upload';
import Modal from './comps/Modal';

function App() {
  const [selectedImage, setSelectedImage] = useState(null); // this is used to enlarge the image when click on the menu

  return (
    <div className="App">
      <Title/>
      <Upload/>
      <ImageGrid setSelectedImage={setSelectedImage} /* pass setSelectedImage as prop, and retrieves the selectedImage*/ /> 
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
    </div>
  );
}

export default App;
