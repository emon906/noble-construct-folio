import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus, MapPin } from 'lucide-react';
import 'maplibre-gl/dist/maplibre-gl.css';
import mapWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url';

export const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('74/1, Bir Uttam Shamsul Alam Road, Kakrail, Dhaka, Bangladesh');

export default function MapMarkerLabel() {
  const container = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import('maplibre-gl').Map | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let disposed = false;
    import('maplibre-gl').then((maplibre) => {
      if (disposed || !container.current) return;
      maplibre.setWorkerUrl(mapWorkerUrl);
      const map = new maplibre.Map({ container: container.current, style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json', center: [90.4071, 23.7385], zoom: 14.6, attributionControl: { compact: true }, scrollZoom: false });
      mapRef.current = map;
      const marker = document.createElement('div');
      marker.className = 'kd-map-marker';
      marker.textContent = 'KD BUILDERS';
      marker.setAttribute('aria-label', 'KD BUILDERS — Kakrail area, approximate location');
      new maplibre.Marker({ element: marker }).setLngLat([90.4071, 23.7385]).addTo(map);
      map.on('error', () => setFailed(true));
      map.on('load', () => setFailed(false));
    }).catch(() => setFailed(true));
    return () => { disposed = true; mapRef.current?.remove(); mapRef.current = null; };
  }, []);
  return <div className="map-shell">
    <div ref={container} className="location-map" aria-label="Interactive dark map of Kakrail, Dhaka" />
    {failed && <div className="map-fallback"><MapPin /><p>Kakrail, Dhaka</p><a href={directionsUrl} target="_blank" rel="noreferrer">View location on Google Maps</a></div>}
    <div className="map-controls"><Button variant="outline" size="icon" aria-label="Zoom in" onClick={() => mapRef.current?.zoomIn()}><Plus /></Button><Button variant="outline" size="icon" aria-label="Zoom out" onClick={() => mapRef.current?.zoomOut()}><Minus /></Button></div>
    <span className="map-note">Kakrail area · approximate map location</span>
  </div>;
}