import React from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import Upload from './comps/Upload';

function App() {
  return (
    <div className="App">
      <Title/>
      <Upload/>
      <ImageGrid/>
    </div>
  );
}

export default App;
