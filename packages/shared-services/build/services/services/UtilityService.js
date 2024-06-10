import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UtilityService {
    /**
     * @returns BankListChitStandardResponse Success
     * @throws ApiError
     */
    static getWalletApiUtilityGetBankList() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Utility/getBankList',
            errors: {
                403: `Forbidden`,
            },
        });
    }
}
