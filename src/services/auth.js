export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '130212dnkl21j3nd21kldn231kj3',
        user: {
          name: 'Inovando',
          email: 'inovando@email.com',
        },
      });
    }, 2000);
  });
}
