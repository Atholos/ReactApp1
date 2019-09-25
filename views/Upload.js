import React, {useState, useEffect, useContext} from 'react';
import {Image} from 'react-native';
import {Form, Button, Text, Content, Header} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import PropTypes from 'prop-types';
import useUploadForm from '../hooks/UploadHooks';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import mediaAPI from '../hooks/ApiHooks';
import {MediaContext} from '../contexts/MediaContext';
import validate from 'validate.js';

const Upload = (props) => {
  const [file, setFile] = useState(null);
  const {reloadAllMedia} = mediaAPI();
  const {media, setMedia} = useContext(MediaContext);
  const {
    inputs,
    handleTitleChange,
    handleDescriptionChange,
    handleUpload,
    clearForm,
  } = useUploadForm();

  const canSubmit = () => {
    if (inputs.description && inputs.title && file!==null) {
      return true;
    } else {
      return false;
    }
  };
  const isEnabled = canSubmit();

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      setFile(result);
    }
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const validateInputs = (inputs, props) => {
    const constraints = {
      title: {
        presence: {
          message: '^You must enter a title!',
        },
        length: {
          minimum: 5,
          message: '^title must be atleast 5 characters',
        },
      },
      description: {
        presence: {
          message: '^You must give a description of your image!',
        },
        length: {
          minimum: 10,
          message: '^Description must be atleast 10 characters',
        },
      },
    };
    const titleError = validate({title: inputs.title}, constraints);
    const descError = validate(
        {description: inputs.description},
        constraints
    );
    if (!titleError.title && !descError.description) {
      handleUpload(file);
      clearForm();
      setFile();
      setMedia([]);

      setTimeout(() =>{
        reloadAllMedia(setMedia);
        props.navigation.navigate('Home');
      }, 2000);

      console.log('Upload Complete!');
    } else {
      const errorArray = [titleError.title, descError.description];

      for (let i = 0; i < errorArray.length; i++) {
        if (errorArray[i]) {
          console.log('alert:', errorArray[i][0]);
          alert(errorArray[i][0]);
        }
      }
    }
  };

  return (
    <Content>
      <Header />
      {file &&
        <Image source={{uri: file.uri}} style={{width: 200, height: 200}} />
      }
      <Form>
        <FormTextInput
          value={inputs.title}
          placeholder='title'
          onChangeText={handleTitleChange}
          required
        />
        <FormTextInput
          value={inputs.description}
          placeholder='description'
          onChangeText={handleDescriptionChange}
          required
        />
        <Button block
          onPress={pickImage}
        >
          <Text>Choose file</Text>
        </Button>

        <Button
          disabled = {!isEnabled}
          onPress={() => {
            validateInputs(inputs, props);
          }}
        >
          <Text>Upload file</Text>
        </Button>

        <Button block
          onPress={() => {
            clearForm();
            setFile();
          }}>
          <Text>Reset</Text>
        </Button>
      </Form>
    </Content>

  );
};

Upload.propTypes = {
  navigation: PropTypes.object,
};

export default Upload;
