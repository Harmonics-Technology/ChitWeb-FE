/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Actions } from './Actions';
import type { PartnerParams } from './PartnerParams';

export type SmileIdVerificationResponse = {
    actions?: Actions;
    country?: string | null;
    dob?: string | null;
    expirationDate?: string | null;
    issuanceDate?: string | null;
    fullName?: string | null;
    idNumber?: string | null;
    idType?: string | null;
    isFinalResult?: string | null;
    jsonVersion?: string | null;
    partnerParams?: PartnerParams;
    photo?: string | null;
    resultCode?: string | null;
    resultText?: string | null;
    resultType?: string | null;
    smileJobID?: string | null;
    signature?: string | null;
    timestamp?: string;
};

