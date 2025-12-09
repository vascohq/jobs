import { Router, Request, Response } from 'express';
import { executeQuery, getTableName } from '../bigquery';
import { DealRow } from '../types';

const router = Router();

/**
 * GET /api/deals
 * List all deals from BigQuery
 * This endpoint is used to verify that the setup is working correctly.
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const tableName = getTableName('deals');
    
    const query = `
      SELECT 
        id,
        name,
        status,
        created_at,
        updated_at,
        last_activity_at,
        won_at,
        lost_at
      FROM \`${tableName}\`
      ORDER BY created_at DESC
      LIMIT 100
    `;
    
    const rows = await executeQuery<DealRow>(query);
    
    // Transform BigQuery timestamp objects to ISO strings
    const deals = rows.map(row => ({
      id: row.id,
      name: row.name,
      status: row.status,
      created_at: row.created_at?.value || row.created_at,
      updated_at: row.updated_at?.value || row.updated_at,
      last_activity_at: row.last_activity_at?.value || row.last_activity_at,
      won_at: row.won_at?.value || row.won_at || null,
      lost_at: row.lost_at?.value || row.lost_at || null,
    }));
    
    res.json({
      success: true,
      count: deals.length,
      deals,
    });
  } catch (error) {
    console.error('Error fetching deals:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

export default router;
