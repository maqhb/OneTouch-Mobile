// Native Imports
import React from 'react';

// Component Imports
import AppButton from '../../components/Buttons/AppButton';

// Supporting Imports
import {useFormikContext} from 'formik';

const SubmitButton = ({name, style}) => {
  const {handleSubmit} = useFormikContext();
  return <AppButton name={name} onPress={handleSubmit} style={style} />;
};

export default SubmitButton;
