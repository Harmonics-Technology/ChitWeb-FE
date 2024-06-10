import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChitService {
    /**
     * @returns any Success
     * @throws ApiError
     */
    static getWalletApiChitChitTypes() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Chit/chit-types',
        });
    }
}
