import { StorageConfig } from '../../types';
import { FileAdapter, ImageAdapter } from './types';
export declare function localImageAssetsAPI(storageConfig: StorageConfig & {
    kind: 'local';
}): ImageAdapter;
export declare function localFileAssetsAPI(storageConfig: StorageConfig & {
    kind: 'local';
}): FileAdapter;
