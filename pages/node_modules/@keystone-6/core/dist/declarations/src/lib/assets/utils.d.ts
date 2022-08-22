/// <reference types="node" />
/// <reference types="node" />
import { Readable } from 'stream';
export declare function streamToBuffer(stream: Readable): Promise<Buffer>;
