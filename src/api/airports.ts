export interface AirportsPresentation {
  title: string;
  suggestionTitle: string;
  subtitle: string;
}

export interface AirportsNavigation {
  entityId: string;
  entityType: string;
  localizedName: string;
  relevantFlightParams: {
    skyId: string;
    flightPlaceType: string;
    localizedName: string;
  };
}

export interface NearbyAirports {
  status: boolean;
  timestamp: EpochTimeStamp;
  data: {
    current: {
      presentation: AirportsPresentation;
      navigation: AirportsNavigation;
      skyId: string;
    };
    nearby: [
      {
        presentation: AirportsPresentation;
        navigation: AirportsNavigation;
      }
    ];
    recent: [];
  };
}

export interface Airports {
  status: boolean;
  timestamp: EpochTimeStamp;
  data: Array<{
    skyId: string;
    entityId: string;
    navigation: AirportsNavigation;
    presentation: AirportsPresentation;
  }>;
}

export async function getNearbyAirports({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): Promise<NearbyAirports> {
  try {
    if (!import.meta.env.VITE_SS_API_HOST || !import.meta.env.VITE_SS_API_KEY) {
      throw new Error(`API KEY/HOST incorrectly configured!`);
    }

    const url = `https://${
      import.meta.env.VITE_SS_API_HOST
    }/api/v1/flights/getNearByAirports?lat=${latitude}&lng=${longitude}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': import.meta.env.VITE_SS_API_HOST,
        'x-rapidapi-key': import.meta.env.VITE_SS_API_KEY,
      },
    };
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.log(err);
    return {} as NearbyAirports;
  }
}

export async function getAirports(searchQuery: string): Promise<Airports> {
  try {
    if (!import.meta.env.VITE_SS_API_HOST || !import.meta.env.VITE_SS_API_KEY) {
      throw new Error(`API KEY/HOST incorrectly configured!`);
    }

    const url = `https://${
      import.meta.env.VITE_SS_API_HOST
    }/api/v1/flights/searchAirport?query=${searchQuery}&locale=en-US`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': import.meta.env.VITE_SS_API_HOST,
        'x-rapidapi-key': import.meta.env.VITE_SS_API_KEY,
      },
    };
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.log(err);
    return {} as Airports;
  }
}
