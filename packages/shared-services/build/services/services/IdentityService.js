import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IdentityService {
    /**
     * @returns any Success
     * @throws ApiError
     */
    static postIdentityApiIdentityRegister({ isMobile, requestBody, }) {
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
    static postIdentityApiIdentityLogin({ useCookies, useSessionCookies, isMobile, requestBody, }) {
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
    static postIdentityApiIdentityRefresh({ isMobile, requestBody, }) {
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
    static mapIdentityApiApiIdentityConfirmEmail({ userId, code, changedEmail, isMobile, }) {
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
    static postIdentityApiIdentityResendConfirmationEmail({ isMobile, requestBody, }) {
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
    static postIdentityApiIdentityForgotPassword({ isMobile, requestBody, }) {
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
    static postIdentityApiIdentityResetPassword({ isMobile, requestBody, }) {
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
    static postIdentityApiIdentityManage2Fa({ isMobile, requestBody, }) {
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
    static getIdentityApiIdentityManageInfo({ isMobile, }) {
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
    static postIdentityApiIdentityManageInfo({ isMobile, requestBody, }) {
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
    static register({ isMobile, requestBody, }) {
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
    static confirmEmail({ isMobile, requestBody, }) {
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
    static validateToken({ isMobile, }) {
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
    static initiatePhoneNumberVerification({ phoneNumber, isMobile, }) {
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
    static verifyPhoneNumber({ token, isMobile, }) {
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
    static bankAccountValidation({ isMobile, requestBody, }) {
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
    static resetPasswordAsync({ isMobile, requestBody, }) {
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
