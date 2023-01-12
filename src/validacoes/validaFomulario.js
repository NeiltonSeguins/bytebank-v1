import * as yup from 'yup';

async function validaDadosFormulario(user) {
  let schema = yup.object().shape({
    email: yup
      .string()
      .email('O email digitado é inválido')
      .required('O campo email é obrigatório'),
  });

  try {
    await schema.validate(user);
    return { valid: true, path: '', message: '' };
  } catch (erro) {
    return { valid: false, path: erro.path, message: erro.errors };
  }
}
export { validaDadosFormulario };
