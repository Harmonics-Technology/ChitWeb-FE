/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankListChitStandardResponse } from '../models/BankListChitStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UtilityService {

    /**
     * @returns BankListChitStandardResponse Success
     * @throws ApiError
     */
    public static getWalletApiUtilityGetBankList(): CancelablePromise<BankListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Utility/getBankList',
            errors: {
                403: `Forbidden`,
            },
        });
    }

}
