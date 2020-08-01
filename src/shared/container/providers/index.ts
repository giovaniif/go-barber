import { container } from 'tsyringe';
import uploadConfig from '@config/upload';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import S3StorageProvider from './StorageProvider/implementations/S3StorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';

import IMailTemplateProvider from './MailTemplateProvider/models/IMailTemplateProvider';
import HandleBarsMailTemplateProvider from './MailTemplateProvider/implementations/HandleBarsMailTemplateProvider';

import ICacheProvider from './CacheProvider/models/ICacheProvider';
import RedisCacheProvider from './CacheProvider/implementations/RedisCacheProvider';

const storageProviders = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  storageProviders[uploadConfig.driver]
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandleBarsMailTemplateProvider
);

container.registerSingleton<ICacheProvider>(
  'CacheProvider',
  RedisCacheProvider
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider)
);
