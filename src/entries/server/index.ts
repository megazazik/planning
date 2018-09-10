import startServer from '../../server';
import pargeArgs from 'minimist';

const params = pargeArgs(process.argv.slice(2));
startServer({port: params.port});