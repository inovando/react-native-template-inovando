# <MaskedField/>

## Usage

```javascript
import React, { useRef } from 'react';
import { Formik, Field } from 'formik';
import MaskedField from 'components/MaskedField';

function AwesomeForm() {
  const email = useRef(null);

  // ...
  return (
    <Formik
      initialValues={{ cpf: '' }}
      // ...
    >
      {({ handleSubmit, isSubmitting }) => (
        <>
          <Field
            // accept all props from TextField

            // "type" is required
            // https://github.com/benhurott/react-native-masked-text
            type="cpf"

            // Getting to next input is not equal to "<TextField />"
            onSubmitEditing={() => {
              // The only difference here is the "getElement()" function
              // to get input's node to ".focus()" e.g.
              cpf.current.getElement().focus();
            }}

            // React Native's TextInput, but fully compatible with Formik's Field API
            // https://jaredpalmer.com/formik/docs/api/field
            component={MaskedField}
          />
        </>
      )}
    </Formik>
  )
}
```
