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
  const handleUsernameChangeRegister = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        username: text,
      }));
  };
  const handlePasswordChangeRegister = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        password: text,
      }));
  };
  const handleEmailChangeRegister = (text) => {
    setInputs((inputs) => ({
      ...inputs,
      email: text,
    }));
  };
  const handleFullnameChangeRegister = (text) => {
    setInputs((inputs) => ({
      ...inputs,
      fullname: text,
    }));
  };
  return {
    handleUsernameChange,
    handlePasswordChange,
    inputs,
    handleUsernameChangeRegister,
    handlePasswordChangeRegister,
    handleEmailChangeRegister,
    handleFullnameChangeRegister,
  };
};

export default useSignUpForm;
