/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanChitStandardResponse } from '../models/BooleanChitStandardResponse';
import type { FundWalletModel } from '../models/FundWalletModel';
import type { WalletViewChitStandardResponse } from '../models/WalletViewChitStandardResponse';
import type { WalletViewListChitStandardResponse } from '../models/WalletViewListChitStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WalletService {

    /**
     * @returns WalletViewChitStandardResponse Success
     * @throws ApiError
     */
    public static nameMyWallet(): CancelablePromise<WalletViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Wallet/name',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * @returns WalletViewChitStandardResponse Success
     * @throws ApiError
     */
    public static getWallet({
        walletId,
    }: {
        walletId: string,
    }): CancelablePromise<WalletViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Wallet/{walletId}',
            path: {
                'walletId': walletId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * @returns WalletViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static getWallets(): CancelablePromise<WalletViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Wallet/all',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static fundWallet({
        requestBody,
    }: {
        requestBody?: FundWalletModel,
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Wallet/dev/fund',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
