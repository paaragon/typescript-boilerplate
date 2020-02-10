import config from 'config';
import logger from '../lib/logger';

const log = logger.child({ namespace: 'index.ts' });

log.info('hola caracola');
log.error('Fatal error');

const environment: string = config.get('env');
log.info(environment);
