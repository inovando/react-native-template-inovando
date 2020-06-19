# <Modal />

## Usage

```javascript
<Modal
  title="Confirm action?"
  isVisible={showModal}
  onClose={() => setShowModal(false)}
  footerComponent={
    <Button onPress={signOut} stretch>
      Logout
    </Button>
  }
  height={200}
>
  <Text>I am the modal content!</Text>
</Modal>
```
