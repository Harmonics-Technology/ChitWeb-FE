import { __decorate, __metadata } from "tslib";
import { Length, IsEmail, IsStrongPassword } from 'class-validator';
export class LoginRequestValidator {
}
__decorate([
    IsEmail(),
    __metadata("design:type", Object)
], LoginRequestValidator.prototype, "email", void 0);
__decorate([
    Length(8, 100),
    IsStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }),
    __metadata("design:type", Object)
], LoginRequestValidator.prototype, "password", void 0);
