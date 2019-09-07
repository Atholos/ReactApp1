import {useState} from 'react';

const useRegisterForm = () => {
  const [RegInputs, setInputs] = useState({});

  const handleUsernameChangeRegister = (text) => {
    setInputs((RegInputs) =>
      ({
        ...RegInputs,
        username: text,
      }));
  };
  const handlePasswordChangeRegister = (text) => {
    setInputs((RegInputs) =>
      ({
        ...RegInputs,
        password: text,
      }));
  };
  const handleEmailChangeRegister = (text) => {
    setInputs((RegInputs) => ({
      ...RegInputs,
      email: text,
    }));
  };
  const handleFullnameChangeRegister = (text) => {
    setInputs((RegInputs) => ({
      ...RegInputs,
      fullname: text,
    }));
  };
  return {
    handleUsernameChangeRegister,
    handlePasswordChangeRegister,
    handleEmailChangeRegister,
    handleFullnameChangeRegister,
    RegInputs,
  };
};

export default useRegisterForm;
