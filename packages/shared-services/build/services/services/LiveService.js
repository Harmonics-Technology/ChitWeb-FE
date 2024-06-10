import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LiveService {
    /**
     * @returns any Success
     * @throws ApiError
     */
    static getIdentityApiLive({ isMobile, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/api/Live',
            headers: {
                'IsMobile': isMobile,
            },
        });
    }
    /**
     * @returns any Success
     * @throws ApiError
     */
    static postIdentityApiLive({ isMobile, requestBody, }) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Live',
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
    static getIdentityApiLiveTestSlack({ isMobile, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/api/Live/test/slack',
            headers: {
                'IsMobile': isMobile,
            },
        });
    }
}
