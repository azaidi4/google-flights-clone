import {
  NearbyAirports,
  AirportsPresentation,
  AirportsNavigation,
  Airports,
} from '@/api/airports';
import { LucideIcon, MapPinIcon, PlaneIcon } from 'lucide-react';

export type AirportsList = Array<{
  value: string;
  label: string;
  keywords: string[];
  icon: LucideIcon;
}>;

export function formatNearbyAirports(airports?: NearbyAirports): AirportsList {
  if (!airports) {
    return [];
  }
  const current = formatAirport(airports.data.current);
  const nearby = airports.data.nearby.map(formatAirport);

  return [current, ...nearby];
}

export function formatAirports(airports: Airports) {
  return airports.data.map(formatAirport);
}

const formatAirport = (airport: {
  presentation: AirportsPresentation;
  navigation: AirportsNavigation;
}) => ({
  value: [
    airport.navigation.relevantFlightParams.skyId,
    airport.navigation.entityId,
  ].join(';'),
  label: airport.presentation.suggestionTitle,
  keywords: [airport.navigation.entityType],
  icon: airportItemIconSelector(airport.navigation.entityType),
});

function airportItemIconSelector(entityType: string) {
  switch (entityType) {
    case 'COUNTRY':
    case 'CITY':
      return MapPinIcon;
    case 'AIRPORT':
    default:
      return PlaneIcon;
  }
}
