# Google Ads Lead CRM System

A simple CRM system built using Google Ads Scripts and Google Sheets to track campaign performance, conversions, and lead status in one place.

---

## Overview

This project demonstrates how to build a lightweight CRM system using Google Ads data.

Instead of manually checking performance and tracking leads separately, this system:

* Pulls campaign data automatically
* Stores it in Google Sheets
* Allows manual lead status tracking
* Acts as a simple CRM for performance marketing

---

## Key Features

* Automated data extraction from Google Ads
* Campaign-level performance tracking
* Lead status management (New / Contacted / Closed)
* Notes column for follow-ups
* Easy integration with dashboards

---

## Data Structure

The system stores the following data:

* Date
* Campaign Name
* Clicks
* Conversions
* Cost
* Status
* Notes

---

## How It Works

1. Google Ads Script fetches campaign data
2. Data is pushed into Google Sheets
3. Each row acts as a lead entry
4. Status can be updated manually
5. Notes can be added for follow-ups

---

## Setup Instructions

### Step 1: Create Google Sheet

Create a new Google Sheet and name a tab:

Leads

---

### Step 2: Open Google Ads Script

1. Go to your Google Ads account
2. Navigate to: Tools → Bulk Actions → Scripts
3. Click "New Script"

---

### Step 3: Add Script

Copy code from:

/scripts/google-ads-crm.js

Paste into the script editor.

---

### Step 4: Authorize Script

Grant required permissions to run the script.

---

### Step 5: Run Script

Run:

fetchGoogleAdsLeads()

---

## Lead Status System

You can manually update lead status in the sheet:

* New
* Contacted
* Closed

---

## Use Cases

* Track campaign performance in one place
* Manage leads without a complex CRM
* Monitor conversions and cost efficiency
* Organize follow-ups

---

## Limitations

Google Ads does not provide direct user-level lead data (name, email, phone).

This system tracks:

* Campaign performance
* Conversion-level insights

---

## Future Improvements

* Integration with form-based lead capture
* Automated email follow-ups
* Dashboard integration (Looker Studio)
* Multi-client tracking

---

## Tech Stack

* Google Ads Scripts
* Google Sheets

---

## Outcome

* Centralized performance tracking
* Simplified lead management
* Reduced manual effort
* Better campaign visibility

---

## About Me

Manoj Kumar
Growth Architect | Performance Engineer

I build automation systems for marketing, reporting, and lead management.
