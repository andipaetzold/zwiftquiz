<script lang="ts">
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  import type { Route } from "zwift-data";

  export let route: Route;

  let map: L.Map;

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
    });
  }
</script>

<div class="map p-6" use:mapAction />

<style>
  .map {
    width: 500px;
    max-width: 100%;
    height: 300px;
    background-color: white;
  }
</style>
