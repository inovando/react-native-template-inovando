import { validateBr } from 'js-brasil';
import { setupYup } from 'config/yup';

const Yup = setupYup();

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  cpf: Yup.string()
    .required()
    .test('cpf', 'CPF Inválido', function (value) {
      if (!value) return;
      return validateBr.cpf(value);
    }),
});

export default schema;
