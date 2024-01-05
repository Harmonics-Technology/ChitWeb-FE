/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StringChitStandardResponse } from '../models/StringChitStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WalletService {
  /**
   * @returns StringChitStandardResponse Success
   * @throws ApiError
   */
  public static getWalletApiWalletBalance(): CancelablePromise<StringChitStandardResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/wallet/api/Wallet/balance',
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }
}
