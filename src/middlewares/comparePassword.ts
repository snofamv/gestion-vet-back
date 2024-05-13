import bcrypt from 'bcrypt';

export const comparePassword = async (
  password: string,
  passwordEncriptada: string,
) => {
  return await bcrypt.compare(password, passwordEncriptada);
};
