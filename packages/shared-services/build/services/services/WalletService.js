import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WalletService {
    /**
     * @returns WalletViewChitStandardResponse Success
     * @throws ApiError
     */
    static nameMyWallet() {
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
    static getWallet({ walletId, }) {
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
    static getWallets() {
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
    static fundWallet({ requestBody, }) {
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
