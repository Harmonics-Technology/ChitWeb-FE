/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Bank } from './Bank';
import type { HttpStatusCode } from './HttpStatusCode';

export type BankListChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<Bank> | null;
    statusCode?: HttpStatusCode;
    errors?: any;
};

