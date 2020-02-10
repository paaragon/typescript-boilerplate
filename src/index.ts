import logger from './logger';

const log = logger.child({ namespace: 'index.ts' });

log.info('hola caracola');
log.error('Fatal error');
