output "dataset_id" {
  description = "The BigQuery dataset ID"
  value       = google_bigquery_dataset.deals_dataset.dataset_id
}

output "deals_table_id" {
  description = "The BigQuery deals table ID"
  value       = google_bigquery_table.deals.table_id
}

output "config_table_id" {
  description = "The BigQuery config table ID"
  value       = google_bigquery_table.config.table_id
}

output "project_id" {
  description = "The GCP project ID"
  value       = var.project_id
}
