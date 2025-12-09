variable "project_id" {
  description = "The GCP project ID"
  type        = string
}

variable "region" {
  description = "The GCP region for resources"
  type        = string
  default     = "US"
}

variable "dataset_id" {
  description = "The BigQuery dataset ID"
  type        = string
  default     = "deals_dataset"
}
