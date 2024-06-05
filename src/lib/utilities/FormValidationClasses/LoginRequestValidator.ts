
import { Length, Min, IsEmail, IsStrongPassword } from 'class-validator';

export class LoginRequestValidator {
  @IsEmail()
  email?: string | null;

  @Length(8, 100)
  // must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character
  // @regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,100}$/)
  @IsStrongPassword(options = { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
  password?: string | null;

  @Length(6, 6)
  twoFactorCode?: string | null;

  @Length(8, 8)
  twoFactorRecoveryCode?: string | null;
}
