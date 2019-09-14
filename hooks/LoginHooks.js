import {useState} from 'react';

const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});
  const handleUsernameChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        username: text,
      }));
  };
  const handlePasswordChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        password: text,
      }));
  };
  const handlePasswordConfirmChange = (text) => {
    setInputs((inputs) => ({
      ...inputs,
      passwordConfirm: text,
    }));
  };
  const handleEmailChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        email: text,
      }));
  };
  const handleFullnameChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        full_name: text,
      }));
  };

  const handleFormChange = (form) =>{
    setInputs((inputs) => ({
      ...inputs,
      form: form,
    }));
  };
  return {
    handleUsernameChange,
    handlePasswordChange,
    handleEmailChange,
    handleFullnameChange,
    inputs,
    handleFormChange,
    handlePasswordConfirmChange,
  };
};


export default useSignUpForm;
