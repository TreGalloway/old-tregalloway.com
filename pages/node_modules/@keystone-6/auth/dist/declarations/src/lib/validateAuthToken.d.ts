import type { KeystoneDbAPI } from '@keystone-6/core/types';
import { AuthTokenRedemptionErrorCode, SecretFieldImpl } from '../types';
export declare function validateAuthToken(listKey: string, secretFieldImpl: SecretFieldImpl, tokenType: 'passwordReset' | 'magicAuth', identityField: string, identity: string, tokenValidMins: number | undefined, token: string, dbItemAPI: KeystoneDbAPI<any>[string]): Promise<{
    success: false;
    code: AuthTokenRedemptionErrorCode;
} | {
    success: true;
    item: {
        id: any;
        [prop: string]: any;
    };
}>;
