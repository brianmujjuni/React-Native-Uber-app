import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DaTABASE_URL || '');