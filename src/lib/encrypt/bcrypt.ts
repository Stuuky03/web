import bcrypt from "bcrypt";

type EncryptType = {
  cryptPassword: (password: string) => Promise<string>
  comparePassword: (password: string, hashedPassword: string) => Promise<boolean>
}

export const Encrypt: EncryptType = {

  cryptPassword: (password) =>
    bcrypt.genSalt(10)
      .then((salt => bcrypt.hash(password, salt)))
      .then(hash => hash),

  comparePassword: (password, hashedPassword) =>
    bcrypt.compare(password, hashedPassword)
      .then(resp => resp)

}