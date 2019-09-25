import {useState} from 'react';
import mediaAPI from './ApiHooks';


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
    const {uploadFile, getAllMedia} = mediaAPI();

    // Infer the type of the image
    const match = /\.(\w+)$/.exec(filename);
    let type = '';
    if (file.type === 'image') {
      type = match ? `image/${match[1]}` : `image`;
      if (type === 'image/jpg') {
        type = 'image/jpeg';
      }
    } else {
      type = match ? `video/${match[1]}` : `video`;
    }

    // Upload the image using the Sfetch and FormData APIs
    const formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append('file', {uri: file.uri, name: filename, type});
    formData.append('title', inputs.title);
    formData.append('description', inputs.description);
    console.log('Upload file: ', uploadFile(formData));

/*     uploadFile(formData).then((response) =>{
      console.log('upload response: ', response);

      setMedia([]);
      setTimeout(() => {
        getAllMedia(setMedia);
        navigator.navigator('home');
      }, 2000).catch((err) => {
        console.log(err);
      });
    }); */
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
