# GEV-08 — ORBI Branding / White-label Boundary Plan

## Status

Draft plan.

## Purpose

Define the safe boundary for adapting the God's Eye View lab into an ORBI-branded geospatial intelligence product without breaking architecture, license boundaries, dataset restrictions, or security assumptions.

## Current Position

- The repository is currently an ORBI lab fork/mirror of God's Eye View.
- GEV-05 documented the ORBI adaptation strategy.
- GEV-06 added the first ORBI-specific mock geospatial layer.
- GEV-07 confirmed the ORBI Mock Assets layer works in browser runtime.
- The app still retains upstream identity, UI language, structure, and datasets.

## Branding Boundary

### Safe to adapt now

- ORBI documentation under docs/orbi/.
- ORBI mock-only geospatial layers.
- ORBI internal roadmap language.
- ORBI-specific layer names, demo records, and lab notes.
- Local-only experimental naming for future ORBI modules.

### Do not replace globally yet

- Do not mass-replace God's Eye View branding across the whole repo.
- Do not remove upstream attribution.
- Do not rename package identity until licensing and product split are reviewed.
- Do not present the fork as a finished commercial ORBI product.
- Do not mix private ORBI, Tritec, PMGD, BESS, or client data into the public repo.

## White-label Risk Areas

### 1. License and attribution

- Code license and upstream attribution must be preserved until reviewed.
- Third-party datasets and assets must be treated separately from code.
- Noncommercial or restricted datasets must not be used in a commercial ORBI product without replacement or permission.

### 2. Dataset separation

- Keep ORBI demo data mock-only.
- Avoid importing real project coordinates, plant names, asset IDs, client names, or operational events.
- Use synthetic records until a private ORBI data boundary exists.

### 3. Product identity

- ORBI should not simply re-skin the existing app.
- ORBI should define its own product purpose, audience, and visual identity.
- Candidate product identities should be evaluated before renaming code or UI globally.

### 4. Security

- Keep keyless-first mode as the default for public work.
- Do not expose server-side secrets to the browser.
- Do not prefix private server secrets with client-exposed environment naming.
- Do not publish .env files.

### 5. Architecture

- Preserve the Layer / Source / Provider separation.
- Preserve local GeoJSON layer patterns.
- Preserve test gates before adding more ORBI layers.
- Avoid large refactors before the ORBI product boundary is clearer.

## Candidate ORBI Product Directions

### Option A — ORBI World Intelligence

General-purpose geospatial command center for events, infrastructure, operations, and AI-assisted situational awareness.

### Option B — ORBI Energy Digital Earth

Energy-focused geospatial platform for PV, BESS, O&M, commissioning, environmental risks, asset status, and field intelligence.

### Option C — ORBI GeoOps

Operational geospatial cockpit for field teams, asset inspections, events, tickets, and local AI support.

### Option D — ORBI Earth Lab

Research and experiment identity for public demos, mock data, geospatial prototypes, and AI layer experiments.

## Recommended Direction

Use ORBI Earth Lab for this public repository phase.

Reserve stronger commercial names such as ORBI Energy Digital Earth or ORBI GeoOps for a future private/product repository after license, data, and branding boundaries are resolved.

## Proposed White-label Phases

### Phase 1 — Lab-safe ORBI overlay

- Keep upstream repository identity mostly intact.
- Add ORBI docs and mock layers only.
- Add ORBI screenshots/evidence docs.
- No global branding replacement.

### Phase 2 — ORBI shell exploration

- Define ORBI visual language.
- Prototype ORBI landing/shell labels in isolated files.
- Avoid replacing upstream attribution.
- Keep all data mock-only.

### Phase 3 — Dataset audit and removal plan

- Identify bundled datasets by license and usage.
- Separate commercial-safe data from lab-only data.
- Mark datasets that must be removed or replaced before productization.

### Phase 4 — Private ORBI product fork

- Create a private repository if real ORBI/client data is needed.
- Add private connectors, auth, and data ingestion.
- Keep public lab repo synthetic.

### Phase 5 — Product naming and deployment

- Select final product name.
- Replace UI identity only after license review.
- Define deployment, auth, tenant, and data policies.

## GEV-08 Gate Criteria

- Branding boundary documented.
- White-label risks documented.
- ORBI product naming options documented.
- Recommended public-lab identity documented.
- No code changes required.
- No secrets.
- No real data.

## Gate

- GEV-08 Branding / White-label Boundary Plan: READY FOR REVIEW
