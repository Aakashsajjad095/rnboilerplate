import React, { createContext, useState } from 'react';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const addSelectedImage = (images) => {
    setSelectedImages((prevSelectedImages) => [...prevSelectedImages, ...images]);
  };

  const removeSelectedImage = (image) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.filter((selectedImage) => selectedImage.id !== image.id)
    );
  };

  const clearSelectedImages = () => {
    setSelectedImages([]);
  };

  return (
    <ImageContext.Provider
      value={{
        selectedImages,
        addSelectedImage,
        removeSelectedImage,
        clearSelectedImages,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
