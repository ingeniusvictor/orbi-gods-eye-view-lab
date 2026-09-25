# GEV-06 — ORBI Mock Geospatial Layer

## Status

Adds the first ORBI-specific geospatial layer to the God's Eye View lab repository.

## Scope

This is a mock-only layer.

No real client data.
No Tritec data.
No PMGD private data.
No BESS private data.
No API keys.
No commercial dataset.

## Added Layer

Layer id:

- `local-orbi-assets`

Layer name:

- `ORBI Mock Assets`

Dataset:

- `src/data/local_data/orbi/orbi_mock_assets.geojsonl`

## Mock Records

- ORBI PV Rancagua Demo
- ORBI PV Osorno Demo
- ORBI BESS Diego Demo
- ORBI BESS Rancagua Demo
- ORBI Edge Node 01 Demo
- ORBI Edge Node 02 Demo
- ORBI News Energy Event Demo

## Technical Approach

The layer reuses the existing local GeoJSON infrastructure path:

- `createInfrastructureLayers()`
- `createLocalGeoJsonLayer()`
- local GeoJSONL dataset
- enabled-only layer state metadata

## Validation Plan

Commands:

- `npm run check:boundaries`
- `npm test`
- `npm run dev`

Manual smoke test:

- Open `http://localhost:4173`
- Open `DATA LAYERS`
- Enable `ORBI Mock Assets`
- Confirm mock ORBI points appear on the globe.
