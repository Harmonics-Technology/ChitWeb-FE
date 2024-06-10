import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KycService {
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    static initiateBasicKyc({ isMobile, requestBody, }) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Kyc/basic',
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
     * @returns IdTypesListChitStandardResponse Success
     * @throws ApiError
     */
    static getIdTypes({ isMobile, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/api/Kyc/id-types',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @returns any Success
     * @throws ApiError
     */
    static processSmileIdCallback({ isMobile, requestBody, }) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Kyc/smile-id-callback',
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
