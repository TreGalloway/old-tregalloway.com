import type { KeystoneDbAPI } from '@keystone-6/core/types';
import { SecretFieldImpl } from '../types';
export declare function validateSecret(secretFieldImpl: SecretFieldImpl, identityField: string, identity: string, secretField: string, secret: string, dbItemAPI: KeystoneDbAPI<any>[string]): Promise<{
    success: false;
} | {
    success: true;
    item: {
        id: any;
        [prop: string]: any;
    };
}>;
