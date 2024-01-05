/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessTokenResponse } from '../models/AccessTokenResponse';
import type { EmailConfirmationModel } from '../models/EmailConfirmationModel';
import type { ForgotPasswordRequest } from '../models/ForgotPasswordRequest';
import type { InfoRequest } from '../models/InfoRequest';
import type { InfoResponse } from '../models/InfoResponse';
import type { LoginRequest } from '../models/LoginRequest';
import type { RefreshRequest } from '../models/RefreshRequest';
import type { RegisterRequest } from '../models/RegisterRequest';
import type { ResendConfirmationEmailRequest } from '../models/ResendConfirmationEmailRequest';
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
    requestBody,
  }: {
    requestBody?: RegisterRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/identity/api/identity/register',
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
    requestBody,
  }: {
    useCookies?: boolean;
    useSessionCookies?: boolean;
    requestBody?: LoginRequest;
  }): CancelablePromise<AccessTokenResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/identity/api/identity/login',
      query: {
        useCookies: useCookies,
        useSessionCookies: useSessionCookies,
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
    requestBody,
  }: {
    requestBody?: RefreshRequest;
  }): CancelablePromise<AccessTokenResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/identity/api/identity/refresh',
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
  }: {
    userId?: string;
    code?: string;
    changedEmail?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/identity/api/identity/confirmEmail',
      query: {
        userId: userId,
        code: code,
        changedEmail: changedEmail,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postIdentityApiIdentityResendConfirmationEmail({
    requestBody,
  }: {
    requestBody?: ResendConfirmationEmailRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/identity/api/identity/resendConfirmationEmail',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postIdentityApiIdentityForgotPassword({
    requestBody,
  }: {
    requestBody?: ForgotPasswordRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/identity/api/identity/forgotPassword',
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
    requestBody,
  }: {
    requestBody?: ResetPasswordRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/identity/api/identity/resetPassword',
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
    requestBody,
  }: {
    requestBody?: TwoFactorRequest;
  }): CancelablePromise<TwoFactorResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/identity/api/identity/manage/2fa',
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
  public static getIdentityApiIdentityManageInfo(): CancelablePromise<InfoResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/identity/api/identity/manage/info',
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
    requestBody,
  }: {
    requestBody?: InfoRequest;
  }): CancelablePromise<InfoResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/identity/api/identity/manage/info',
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
    requestBody,
  }: {
    requestBody?: UserModel;
  }): CancelablePromise<UserViewChitStandardResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/identity/api/Identity/custom/register',
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
    requestBody,
  }: {
    requestBody?: EmailConfirmationModel;
  }): CancelablePromise<UserViewChitStandardResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/identity/api/Identity/custom/confirm-email',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
      },
    });
  }
}
