import { createLocalGeoJsonLayer } from './localGeojsonCore.js';

// Resolved by Vite in builds and relative to this module in other consumers.
const datacentersUrl = new URL(
  './local_data/datacenters/datacenters.geojsonl',
  import.meta.url,
).href;
const damsUrl = new URL('./local_data/dams/dams.geojsonl', import.meta.url)
  .href;
const orbiAssetsUrl = new URL(
  './local_data/orbi/orbi_mock_assets.geojsonl',
  import.meta.url,
).href;

/**
 * Create fresh datacenter and dam layers without starting or loading them.
 * @param {object} services Caller-owned context, overlay and render operations.
 * @returns {object[]} Datacenters then dams, with stable standalone identities.
 */
export function createInfrastructureLayers(services) {
  const datacenters = createLocalGeoJsonLayer(
    {
      id: 'local-datacenters',
      url: datacentersUrl,
      name: 'Datacenters',
      color: '#00ffff', // Cyan
      icon: '▣',
      source: 'Local',
      labels: true,
      labelMax: 700,
      labelGridPx: 138,
    },
    services,
  );

  const dams = createLocalGeoJsonLayer(
    {
      id: 'local-dams',
      url: damsUrl,
      name: 'Dams',
      color: '#0088ff', // Blue
      icon: '▰',
      source: 'USACE',
      labels: true,
      labelMax: 900,
      labelGridPx: 132,
    },
    services,
  );

  const orbiAssets = createLocalGeoJsonLayer(
    {
      id: 'local-orbi-assets',
      url: orbiAssetsUrl,
      name: 'ORBI Mock Assets',
      color: '#36f5c8',
      icon: '◆',
      source: 'ORBI Lab',
      labels: true,
      labelMax: 80,
      labelGridPx: 120,
    },
    services,
  );

  return [datacenters, dams, orbiAssets];
}
