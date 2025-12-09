terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# BigQuery Dataset
resource "google_bigquery_dataset" "deals_dataset" {
  dataset_id                 = var.dataset_id
  friendly_name              = "Deals Dataset"
  description                = "Dataset for the Vasco Data Engineer Challenge"
  location                   = var.region
  delete_contents_on_destroy = true
}

# Deals Table
resource "google_bigquery_table" "deals" {
  dataset_id          = google_bigquery_dataset.deals_dataset.dataset_id
  table_id            = "deals"
  deletion_protection = false

  schema = jsonencode([
    {
      name        = "id"
      type        = "STRING"
      mode        = "REQUIRED"
      description = "Unique deal identifier"
    },
    {
      name        = "name"
      type        = "STRING"
      mode        = "REQUIRED"
      description = "Deal name"
    },
    {
      name        = "status"
      type        = "STRING"
      mode        = "NULLABLE"
      description = "Deal status: 'won', 'lost', or NULL (active)"
    },
    {
      name        = "created_at"
      type        = "TIMESTAMP"
      mode        = "REQUIRED"
      description = "When the deal was created"
    },
    {
      name        = "updated_at"
      type        = "TIMESTAMP"
      mode        = "REQUIRED"
      description = "When the deal was last updated"
    },
    {
      name        = "last_activity_at"
      type        = "TIMESTAMP"
      mode        = "REQUIRED"
      description = "When the last activity occurred on this deal"
    },
    {
      name        = "won_at"
      type        = "TIMESTAMP"
      mode        = "NULLABLE"
      description = "When the deal was won"
    },
    {
      name        = "lost_at"
      type        = "TIMESTAMP"
      mode        = "NULLABLE"
      description = "When the deal was lost"
    }
  ])
}

# Config Table (key-value store)
resource "google_bigquery_table" "config" {
  dataset_id          = google_bigquery_dataset.deals_dataset.dataset_id
  table_id            = "config"
  deletion_protection = false

  schema = jsonencode([
    {
      name        = "key"
      type        = "STRING"
      mode        = "REQUIRED"
      description = "Configuration key"
    },
    {
      name        = "value"
      type        = "STRING"
      mode        = "REQUIRED"
      description = "Configuration value"
    }
  ])
}
