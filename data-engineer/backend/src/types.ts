/**
 * Deal entity from BigQuery
 */
export interface Deal {
  id: string;
  name: string;
  status: 'won' | 'lost' | null;
  created_at: Date;
  updated_at: Date;
  last_activity_at: Date;
  won_at: Date | null;
  lost_at: Date | null;
}

/**
 * Deal statistics response
 */
export interface DealStats {
  won: number;
  lost: number;
  active: number;
}

/**
 * Deal statistics with stalled count (Level 3)
 */
export interface DealStatsWithStalled extends DealStats {
  stalled: number;
}

/**
 * Configuration entry
 */
export interface ConfigEntry {
  key: string;
  value: string;
}

/**
 * BigQuery row result for deals
 */
export interface DealRow {
  id: string;
  name: string;
  status: string | null;
  created_at: { value: string };
  updated_at: { value: string };
  last_activity_at: { value: string };
  won_at: { value: string } | null;
  lost_at: { value: string } | null;
}
