import type { KeystoneDbAPI } from '@keystone-6/core/types';
export declare function createAuthToken(identityField: string, identity: string, dbItemAPI: KeystoneDbAPI<any>[string]): Promise<{
    success: false;
} | {
    success: true;
    itemId: string | number | bigint;
    token: string;
}>;
