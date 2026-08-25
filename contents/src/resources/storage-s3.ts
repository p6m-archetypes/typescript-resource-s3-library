import { S3Client } from '@aws-sdk/client-s3';
import { settings } from '../settings';

let _client: S3Client | null = null;

export function initS3(): void {
  _client = new S3Client({
    region: 'us-east-1',
    credentials: {
      accessKeyId: settings.s3AccessKey,
      secretAccessKey: settings.s3SecretKey,
    },
    ...(settings.s3Endpoint
      ? { endpoint: settings.s3Endpoint, forcePathStyle: true }
      : {}),
  });
}

export function getS3(): S3Client {
  if (!_client) throw new Error('S3 not initialized — call initS3() first');
  return _client;
}
