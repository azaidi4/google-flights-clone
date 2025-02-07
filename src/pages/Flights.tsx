import { useEffect } from 'react';
import { useSearchParams } from 'wouter';

export default function Flights() {
  const [params] = useSearchParams();

  const [originSkyId, originEntityId] = params.get('origin')?.split(';') || '';
  const [destinationSkyId, destinationEntityId] =
    params.get('destination')?.split(';') || '';
  const departureDate = params.get('departure');
  const returnDate = params.get('return');

  useEffect(() => {
    if (
      !originSkyId ||
      !originEntityId ||
      !destinationSkyId ||
      !destinationEntityId ||
      !departureDate ||
      !returnDate
    ) {
      console.log('error');
    } else {
      console.log('fetch');
    }
  }, [params]);

  return (
    <pre>
      {Array.from(params.entries()).map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
      ))}
    </pre>
  );
}
