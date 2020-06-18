# <TextField/>

## Usage

```javascript
import React, { useRef } from 'react';
import { Formik, Field } from 'formik';
import TextField from 'components/TextField';

function AwesomeForm() {
  const email = useRef(null);

  // ...
  return (
    <Formik
      initialValues={{ email: '' }}
      // ...
    >
      {({ handleSubmit, isSubmitting }) => (
        <>
          <Field
            // Every input needs a "name" and its initialValue set on "initialValues" prop
            // at formik <Form /> component, just like this example
            name="email"

            // Placeholder
            placeholder="E-mail"

            // https://lefkowitz.me/visual-guide-to-react-native-textinput-keyboardtype-options/
            keyboardType="email-address"

            // Set this to "false" if you have a input to focus next to it
            blurOnSubmit={false}

            // Native keyboard submit, most of the time we focus to the next input by its ref
            onSubmitEditing={() => {
              password.current.focus();
            }}

            // Get input's ref with "useRef" hook (from above)
            innerRef={email}

            // Listen to TextInput's change (optional)
            onChange={text => {
              console.log('text:', text)
            }}

            // https://reactnative.dev/docs/textinput#returnkeylabel
            returnKeyType="next"

            // React Native's TextInput, but fully compatible with Formik's Field API
            // https://jaredpalmer.com/formik/docs/api/field
            component={TextField}
          />
        </>
      )}
    </Formik>
  )
}
```
