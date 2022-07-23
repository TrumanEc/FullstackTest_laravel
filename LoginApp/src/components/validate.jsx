const FormValidation = (e) => {
  let error = {};

  const email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const nameVal = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
  const password = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  );

  if (e.email)
    if (!email.test(e.email)) error.email = "No es un email permitido";
  if (e.name) if (!nameVal.test(e.name)) error.name = "Nombre no valido";
  if (e.password)
    if (!password.test(e.password))
      error.password =
        "obligatorio tener un numero, una mayuscula, un caracter especial, min 8";
  if (e.password_confirmation)
    if (e.password_confirmation !== e.password)
      error.password_confirmation = "No coincide";
  return error;
};

export default FormValidation;
