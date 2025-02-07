import { useEffect, useState } from 'react';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { AutoComplete } from '@/components/ui/autocomplete';
import { getAirports, getNearbyAirports } from '@/api/airports';
import {
  AirportsList,
  formatAirports,
  formatNearbyAirports,
} from '@/lib/search';
import { Button } from '@/components/ui/button';
import { LoaderCircleIcon, PlaneIcon, SearchIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { useLocation } from 'wouter';
import { buildQueryString } from '@/lib/utils';
import { useDebounce } from 'use-debounce';
import { z } from 'zod';

const ReturnFlightSearchSchema = z.object({
  origin: z
    .string()
    .nonempty({ message: 'Please select an origin from the dropdown' })
    .max(50),
  destination: z
    .string()
    .nonempty({ message: 'Please select a destination from the dropdown' })
    .max(50),
  travelDates: z.object(
    {
      from: z.date({ required_error: 'Please select departure date' }),
      to: z.date({ required_error: 'Please select return date' }),
    },
    { required_error: 'Please select travel dates' }
  ),
});

export default function FlightSearch() {
  const [originSearchValue, setOriginSearchValue] = useState('');
  const [originSelectedValue, setOriginSelectedValue] = useState('');
  const [originAirportList, setOriginAirportList] = useState<AirportsList>([]);
  // const [debouncedOriginSearchValue] = useDebounce(originSearchValue, 500);

  const [destinationSearchValue, setDestinationSearchValue] = useState('');
  const [destinationSelectedValue, setDestinationSelectedValue] = useState('');
  const [destinationAirportList, setDestinationAirportList] =
    useState<AirportsList>([]);
  const [debouncedDestinationSearchValue] = useDebounce(
    destinationSearchValue,
    500
  );

  const [travelDates, setTravelDates] = useState<DateRange>();

  const [formErrors, setFormErrors] = useState<
    | z.inferFlattenedErrors<typeof ReturnFlightSearchSchema>['fieldErrors']
    | undefined
  >();

  const [submitIcon, setSubmitIcon] = useState(<SearchIcon />);
  const [isLoadingOrigin, setIsLoadingOrigin] = useState(true);
  const [isLoadingDestination, setIsLoadingDestination] = useState(false);

  const [_, navigate] = useLocation();

  useEffect(() => {
    if (!navigator.geolocation) {
      setIsLoadingOrigin(false);
      console.log('Geolocation not supported');
      return;
    }
    navigator.geolocation.getCurrentPosition(searchNearbyAirports, (err) => {
      setIsLoadingOrigin(false);
      console.log(err);
    });
  }, []);

  async function searchNearbyAirports({ coords }: GeolocationPosition) {
    setIsLoadingOrigin(true);
    setSubmitIcon(<LoaderCircleIcon className="animate-spin" />);
    const airportData = await getNearbyAirports(coords);

    const formattedData = formatNearbyAirports(airportData);

    setOriginAirportList(formattedData);
    setDestinationAirportList(formattedData);

    setOriginSearchValue(formattedData[0].label);
    setOriginSelectedValue(formattedData[0].value);
    setIsLoadingOrigin(false);
    setSubmitIcon(<SearchIcon />);
  }

  useEffect(() => {
    setFormErrors((formErrors) => ({ ...formErrors, origin: undefined }));
  }, [originSelectedValue]);

  useEffect(() => {
    setFormErrors((formErrors) => ({ ...formErrors, destination: undefined }));
  }, [destinationSelectedValue]);

  useEffect(() => {
    setFormErrors((formErrors) => ({ ...formErrors, travelDates: undefined }));
  }, [travelDates]);

  useEffect(() => {
    searchAirports(debouncedDestinationSearchValue);
  }, [debouncedDestinationSearchValue]);

  async function searchAirports(searchQuery: string) {
    if (searchQuery) {
      setIsLoadingDestination(true);
      const data = await getAirports(searchQuery);
      setDestinationAirportList(formatAirports(data));
      setIsLoadingDestination(false);
    }
  }

  function searchFlights() {
    const validationResult = ReturnFlightSearchSchema.safeParse({
      origin: originSelectedValue,
      destination: destinationSelectedValue,
      travelDates,
    });

    if (validationResult.error) {
      setFormErrors(validationResult.error.flatten().fieldErrors);
      return;
    }

    const queryParams = buildQueryString({
      origin: validationResult.data.origin,
      destination: validationResult.data.destination,
      departure: validationResult.data.travelDates.from.toISOString(),
      return: validationResult.data.travelDates.to.toISOString(),
    });

    navigate('flights' + queryParams);
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center border rounded-lg max-w-4xl p-5 mx-auto">
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="flex gap-1 flex-col sm:flex-row">
          <AutoComplete
            selectedValue={originSelectedValue}
            onSelectedValueChange={setOriginSelectedValue}
            searchValue={originSearchValue}
            onSearchValueChange={setOriginSearchValue}
            items={originAirportList}
            placeholder={
              isLoadingOrigin ? 'Finding Nearby Airports...' : 'Where From?'
            }
            emptyMessage="No matching locations found."
            formError={formErrors?.origin?.[0]}
            isLoading={isLoadingOrigin || false}
          />
          <AutoComplete
            selectedValue={destinationSelectedValue}
            onSelectedValueChange={setDestinationSelectedValue}
            searchValue={destinationSearchValue}
            onSearchValueChange={setDestinationSearchValue}
            items={destinationAirportList}
            placeholder="Where To?"
            emptyMessage="No matching locations found."
            formError={formErrors?.destination?.[0]}
            isLoading={isLoadingDestination}
          />
        </div>
        <DatePickerWithRange
          dateRange={travelDates}
          onSelectDateRange={setTravelDates}
          formError={formErrors?.travelDates?.[0]}
          calendarProps={{ disabled: { before: new Date() } }}
        />
      </div>
      <Button
        size="sm"
        onMouseEnter={() =>
          setSubmitIcon(<PlaneIcon className="motion-safe:animate-pulse" />)
        }
        onMouseLeave={() => setSubmitIcon(<SearchIcon />)}
        onClick={searchFlights}
        disabled={isLoadingOrigin}>
        {submitIcon}
        Find Flights
      </Button>
    </div>
  );
}
