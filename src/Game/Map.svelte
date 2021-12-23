<script lang="ts">
  import L, {
    LatLngBounds,
    type ImageOverlay,
    type LatLngTuple,
    type Map,
  } from "leaflet";
  import "leaflet/dist/leaflet.css";
  import { onMount } from "svelte";
  import { worlds, type Route } from "zwift-data";
  import { worldConfigs } from "../worldConfig";

  export let route: Route;
  export let revealed: boolean;

  $: worldConfig = worldConfigs[route.world];
  $: world = worlds.find((w) => w.slug === route.world)!;

  let map: Map;
  let imageOverlay: ImageOverlay;

  $: {
    if (imageOverlay) {
      if (revealed) {
        imageOverlay.addTo(map);
      } else {
        imageOverlay.removeFrom(map);
      }
    }
  }

  onMount(async () => {
    const response = await fetch(`/routes/${route.stravaSegmentId!}.json`);
    const latlng = await response.json();
    L.polyline(latlng, { color: "#fc6719" }).addTo(map);

    const bounds = getBounds(latlng);
    map.fitBounds(bounds);

    imageOverlay = L.imageOverlay(worldConfig.image, world.bounds).addTo(map);
  });

  function mapAction(container: HTMLElement) {
    map = L.map(container, {
      attributionControl: false,
      boxZoom: false,
      doubleClickZoom: false,
      dragging: false,
      scrollWheelZoom: false,
      tap: false,
      touchZoom: false,
      zoomControl: false,
      zoomSnap: 0.1,
    });
  }

  function getBounds(latLngStream: LatLngTuple[]) {
    return latLngStream.reduce(
      (bounds, coord) => bounds.extend(coord),
      new LatLngBounds(latLngStream[0], latLngStream[0])
    );
  }
</script>

<div
  class="h-96 w-lg max-w-full"
  use:mapAction
  class:bg-white={!revealed}
  style="background-color: {worldConfig.backgroundColor}"
/>

