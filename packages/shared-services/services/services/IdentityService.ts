/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessTokenResponse } from '../models/AccessTokenResponse';
import type { BankAccountValidationPayload } from '../models/BankAccountValidationPayload';
import type { BooleanChitStandardResponse } from '../models/BooleanChitStandardResponse';
import type { EmailConfirmationModel } from '../models/EmailConfirmationModel';
import type { ForgotPasswordRequest } from '../models/ForgotPasswordRequest';
import type { InfoRequest } from '../models/InfoRequest';
import type { InfoResponse } from '../models/InfoResponse';
import type { LoginRequest } from '../models/LoginRequest';
import type { RefreshRequest } from '../models/RefreshRequest';
import type { RegisterRequest } from '../models/RegisterRequest';
import type { ResendConfirmationEmailRequest } from '../models/ResendConfirmationEmailRequest';
import type { ResetPasswordPayload } from '../models/ResetPasswordPayload';
import type { ResetPasswordRequest } from '../models/ResetPasswordRequest';
import type { TwoFactorRequest } from '../models/TwoFactorRequest';
import type { TwoFactorResponse } from '../models/TwoFactorResponse';
import type { UserModel } from '../models/UserModel';
import type { UserViewChitStandardResponse } from '../models/UserViewChitStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IdentityService {

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postIdentityApiIdentityRegister({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: RegisterRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/identity/register',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns AccessTokenResponse Success
     * @throws ApiError
     */
    public static postIdentityApiIdentityLogin({
        useCookies,
        useSessionCookies,
        isMobile,
        requestBody,
    }: {
        useCookies?: boolean,
        useSessionCookies?: boolean,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: LoginRequest,
    }): CancelablePromise<AccessTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/identity/login',
            headers: {
                'IsMobile': isMobile,
            },
            query: {
                'useCookies': useCookies,
                'useSessionCookies': useSessionCookies,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns AccessTokenResponse Success
     * @throws ApiError
     */
    public static postIdentityApiIdentityRefresh({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: RefreshRequest,
    }): CancelablePromise<AccessTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/identity/refresh',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static mapIdentityApiApiIdentityConfirmEmail({
        userId,
        code,
        changedEmail,
        isMobile,
    }: {
        userId?: string,
        code?: string,
        changedEmail?: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/api/identity/confirmEmail',
            headers: {
                'IsMobile': isMobile,
            },
            query: {
                'userId': userId,
                'code': code,
                'changedEmail': changedEmail,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postIdentityApiIdentityResendConfirmationEmail({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: ResendConfirmationEmailRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/identity/resendConfirmationEmail',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postIdentityApiIdentityForgotPassword({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: ForgotPasswordRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/identity/forgotPassword',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postIdentityApiIdentityResetPassword({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: ResetPasswordRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/identity/resetPassword',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns TwoFactorResponse Success
     * @throws ApiError
     */
    public static postIdentityApiIdentityManage2Fa({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: TwoFactorRequest,
    }): CancelablePromise<TwoFactorResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/identity/manage/2fa',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns InfoResponse Success
     * @throws ApiError
     */
    public static getIdentityApiIdentityManageInfo({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<InfoResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/api/identity/manage/info',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns InfoResponse Success
     * @throws ApiError
     */
    public static postIdentityApiIdentityManageInfo({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: InfoRequest,
    }): CancelablePromise<InfoResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/identity/manage/info',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns UserViewChitStandardResponse Success
     * @throws ApiError
     */
    public static register({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: UserModel,
    }): CancelablePromise<UserViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Identity/custom/register',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns UserViewChitStandardResponse Success
     * @throws ApiError
     */
    public static confirmEmail({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: EmailConfirmationModel,
    }): CancelablePromise<UserViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Identity/custom/confirm-email',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns UserViewChitStandardResponse Success
     * @throws ApiError
     */
    public static validateToken({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<UserViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/api/Identity/info',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns UserViewChitStandardResponse Success
     * @throws ApiError
     */
    public static initiatePhoneNumberVerification({
        phoneNumber,
        isMobile,
    }: {
        phoneNumber: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<UserViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/api/Identity/custom/verify-phone-number/{phoneNumber}',
            path: {
                'phoneNumber': phoneNumber,
            },
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns UserViewChitStandardResponse Success
     * @throws ApiError
     */
    public static verifyPhoneNumber({
        token,
        isMobile,
    }: {
        token: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<UserViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/api/Identity/custom/verify-phone-number/confirm/{token}',
            path: {
                'token': token,
            },
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static bankAccountValidation({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: BankAccountValidationPayload,
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Identity/custom/verify-bank-details',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static resetPasswordAsync({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: ResetPasswordPayload,
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Identity/custom/reset-password',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
