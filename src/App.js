import React, { useState } from 'react';
import UploadForm from './Components/UploadForm';
import Header from './Components/Header';
import Images from './Components/Images';
import ImageModal from './Components/ImageModal';

function App() {
  const [clickedImage, setClickedImage] = useState(null);

  return (
    <div>
      <Header />
      <UploadForm />
      <Images setClickedImage={setClickedImage} />
      {clickedImage && (
        <ImageModal
          clickedImage={clickedImage}
          setClickedImage={setClickedImage}
        />
      )}
    </div>
  );
}

export default App;
