/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SomethingModel } from '../models/SomethingModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LiveService {

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getIdentityApiLive({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<any> {
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
    public static postIdentityApiLive({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: SomethingModel,
    }): CancelablePromise<any> {
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
    public static getIdentityApiLiveTestSlack({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/api/Live/test/slack',
            headers: {
                'IsMobile': isMobile,
            },
        });
    }

}
