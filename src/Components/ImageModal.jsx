import React from 'react';

const ImageModal = ({ clickedImage, setClickedImage }) => {
  const downloadImage = () => {
    fetch(`https://cors-anywhere.herokuapp.com/${clickedImage.url}`).then(
      (response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = clickedImage.id;
          a.click();
        });
      }
    );
  };

  return (
    <div onClick={() => setClickedImage(null)} className='backdrop'>
      <img src={clickedImage.url} alt='test' />
      <div className='download'>
        <button onClick={downloadImage}>DOWNLOAD</button>
      </div>
    </div>
  );
};

export default ImageModal;
