/// <reference types="node" />
import { KeystoneConfig, ImageMetadata, ImagesContext } from '../../types';
export declare function getImageMetadataFromBuffer(buffer: Buffer): ImageMetadata;
export declare function createImagesContext(config: KeystoneConfig): ImagesContext;
