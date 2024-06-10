import { Length, Min, IsEmail, IsStrongPassword } from 'class-validator';

export class LoginRequestValidator {
  @IsEmail()
  email?: string | null;

  @Length(8, 100)
  @IsStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
  password?: string | null;


  twoFactorCode?: string | null;

  twoFactorRecoveryCode?: string | null;
}
