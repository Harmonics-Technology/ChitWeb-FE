/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChitService {

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getWalletApiChitChitTypes(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Chit/chit-types',
        });
    }

}
