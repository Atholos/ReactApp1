import {useState} from 'react';
import mediaAPI from './ApiHooks';

const {uploadFile} = mediaAPI();

const useUploadForm = () => {
  const [inputs, setInputs] = useState({});
  // upload form event handlers
  const handleTitleChange = (text) => {
    setInputs((inputs) => ({
      ...inputs,
      title: text,
    }));
  };
  const handleDescriptionChange = (text) => {
    setInputs((inputs) => ({
      ...inputs,
      description: text,
    }));
  };

  const clearForm = () => {
    setInputs('');
    console.log('Form Cleared!');
  };

  const handleUpload = async (file) => {
    const filename = file.uri.split('/').pop();

    // Infer the type of the image
    const match = /\.(\w+)$/.exec(filename);
    let type = '';
    if (file.type === 'image') {
      type = match ? `image/${match[1]}` : `image`;
    } else {
      type = match ? `video/${match[1]}` : `video`;
    }

    // Upload the image using the Sfetch and FormData APIs
    const formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append('file', {uri: file.uri, name: filename, type});
    formData.append('title', inputs.title);
    formData.append('description', inputs.description);
    console.log(uploadFile(formData));
  };

  return {
    handleTitleChange,
    handleDescriptionChange,
    handleUpload,
    inputs,
    clearForm,
  };
};

export default useUploadForm;
