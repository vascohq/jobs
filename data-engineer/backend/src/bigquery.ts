import { BigQuery } from '@google-cloud/bigquery';

// Initialize BigQuery client
const bigquery = new BigQuery();

/**
 * Get the fully qualified table name
 */
export function getTableName(tableName: string): string {
  const projectId = process.env.GCP_PROJECT_ID;
  const datasetId = process.env.BQ_DATASET_ID || 'deals_dataset';
  
  if (!projectId) {
    throw new Error('GCP_PROJECT_ID environment variable is not set');
  }
  
  return `${projectId}.${datasetId}.${tableName}`;
}

/**
 * Execute a BigQuery query and return results
 */
export async function executeQuery<T>(query: string, params?: Record<string, unknown>): Promise<T[]> {
  const options: { query: string; params?: Record<string, unknown> } = { query };
  
  if (params) {
    options.params = params;
  }
  
  const [rows] = await bigquery.query(options);
  return rows as T[];
}

export { bigquery };
