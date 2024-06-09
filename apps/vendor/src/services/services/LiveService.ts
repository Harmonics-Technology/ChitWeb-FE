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
  public static getIdentityApiLive(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/identity/api/Live',
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postIdentityApiLive({
    requestBody,
  }: {
    requestBody?: SomethingModel;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/identity/api/Live',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
