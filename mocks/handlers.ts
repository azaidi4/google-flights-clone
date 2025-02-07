import { delay, http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports',
    async () => {
      await delay(1000);
      return HttpResponse.json(nearbyAirports);
    }
  ),
  http.get(
    'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
    async () => {
      await delay();
      return HttpResponse.json(airports);
    }
  ),
];

const nearbyAirports = {
  status: true,
  timestamp: 1738763261958,
  data: {
    current: {
      skyId: 'DXBA',
      entityId: '27540839',
      presentation: {
        title: 'Dubai',
        suggestionTitle: 'Dubai (Any)',
        subtitle: 'United Arab Emirates',
      },
      navigation: {
        entityId: '27540839',
        entityType: 'CITY',
        localizedName: 'Dubai',
        relevantFlightParams: {
          skyId: 'DXBA',
          entityId: '27540839',
          flightPlaceType: 'CITY',
          localizedName: 'Dubai',
        },
        relevantHotelParams: {
          entityId: '27540839',
          entityType: 'CITY',
          localizedName: 'Dubai',
        },
      },
    },
    nearby: [
      {
        presentation: {
          title: 'Dubai',
          suggestionTitle: 'Dubai (DXB)',
          subtitle: 'United Arab Emirates',
        },
        navigation: {
          entityId: '95673506',
          entityType: 'AIRPORT',
          localizedName: 'Dubai',
          relevantFlightParams: {
            skyId: 'DXB',
            entityId: '95673506',
            flightPlaceType: 'AIRPORT',
            localizedName: 'Dubai',
          },
          relevantHotelParams: {
            entityId: '27540839',
            entityType: 'CITY',
            localizedName: 'Dubai',
          },
        },
      },
      {
        presentation: {
          title: 'Dubai Al Maktoum International',
          suggestionTitle: 'Dubai Al Maktoum International (DWC)',
          subtitle: 'United Arab Emirates',
        },
        navigation: {
          entityId: '128668423',
          entityType: 'AIRPORT',
          localizedName: 'Dubai Al Maktoum International',
          relevantFlightParams: {
            skyId: 'DWC',
            entityId: '128668423',
            flightPlaceType: 'AIRPORT',
            localizedName: 'Dubai Al Maktoum International',
          },
          relevantHotelParams: {
            entityId: '27540839',
            entityType: 'CITY',
            localizedName: 'Dubai',
          },
        },
      },
      {
        presentation: {
          title: 'Sharjah',
          suggestionTitle: 'Sharjah (SHJ)',
          subtitle: 'United Arab Emirates',
        },
        navigation: {
          entityId: '95673508',
          entityType: 'AIRPORT',
          localizedName: 'Sharjah',
          relevantFlightParams: {
            skyId: 'SHJ',
            entityId: '95673508',
            flightPlaceType: 'AIRPORT',
            localizedName: 'Sharjah',
          },
          relevantHotelParams: {
            entityId: '90713161',
            entityType: 'CITY',
            localizedName: 'Sharjah',
          },
        },
      },
      {
        presentation: {
          title: 'Zayed International',
          suggestionTitle: 'Zayed International (AUH)',
          subtitle: 'United Arab Emirates',
        },
        navigation: {
          entityId: '95673509',
          entityType: 'AIRPORT',
          localizedName: 'Zayed International',
          relevantFlightParams: {
            skyId: 'AUH',
            entityId: '95673509',
            flightPlaceType: 'AIRPORT',
            localizedName: 'Zayed International',
          },
          relevantHotelParams: {
            entityId: '27548192',
            entityType: 'CITY',
            localizedName: 'Abu Dhabi',
          },
        },
      },
      {
        presentation: {
          title: 'Hamad International',
          suggestionTitle: 'Hamad International (DOH)',
          subtitle: 'Qatar',
        },
        navigation: {
          entityId: '95673852',
          entityType: 'AIRPORT',
          localizedName: 'Hamad International',
          relevantFlightParams: {
            skyId: 'DOH',
            entityId: '95673852',
            flightPlaceType: 'AIRPORT',
            localizedName: 'Hamad International',
          },
          relevantHotelParams: {
            entityId: '27540785',
            entityType: 'CITY',
            localizedName: 'Doha',
          },
        },
      },
      {
        presentation: {
          title: 'Mumbai',
          suggestionTitle: 'Mumbai (BOM)',
          subtitle: 'India',
        },
        navigation: {
          entityId: '95673320',
          entityType: 'AIRPORT',
          localizedName: 'Mumbai',
          relevantFlightParams: {
            skyId: 'BOM',
            entityId: '95673320',
            flightPlaceType: 'AIRPORT',
            localizedName: 'Mumbai',
          },
          relevantHotelParams: {
            entityId: '27539520',
            entityType: 'CITY',
            localizedName: 'Mumbai',
          },
        },
      },
      {
        presentation: {
          title: 'United Arab Emirates',
          suggestionTitle: 'United Arab Emirates',
          subtitle: '',
        },
        navigation: {
          entityId: '29475216',
          entityType: 'COUNTRY',
          localizedName: 'United Arab Emirates',
          relevantFlightParams: {
            skyId: 'AE',
            entityId: '29475216',
            flightPlaceType: 'COUNTRY',
            localizedName: 'United Arab Emirates',
          },
          relevantHotelParams: {
            entityId: '29475216',
            entityType: 'COUNTRY',
            localizedName: 'United Arab Emirates',
          },
        },
      },
    ],
    recent: [],
  },
};

const airports = {
  status: true,
  timestamp: 1738899962579,
  data: [
    // {
    //   skyId: 'NYCA',
    //   entityId: '27537542',
    //   presentation: {
    //     title: 'New York',
    //     suggestionTitle: 'New York (Any)',
    //     subtitle: 'United States',
    //   },
    //   navigation: {
    //     entityId: '27537542',
    //     entityType: 'CITY',
    //     localizedName: 'New York',
    //     relevantFlightParams: {
    //       skyId: 'NYCA',
    //       entityId: '27537542',
    //       flightPlaceType: 'CITY',
    //       localizedName: 'New York',
    //     },
    //     relevantHotelParams: {
    //       entityId: '27537542',
    //       entityType: 'CITY',
    //       localizedName: 'New York',
    //     },
    //   },
    // },
    // {
    //   skyId: 'EWR',
    //   entityId: '95565059',
    //   presentation: {
    //     title: 'New York Newark',
    //     suggestionTitle: 'New York Newark (EWR)',
    //     subtitle: 'United States',
    //   },
    //   navigation: {
    //     entityId: '95565059',
    //     entityType: 'AIRPORT',
    //     localizedName: 'New York Newark',
    //     relevantFlightParams: {
    //       skyId: 'EWR',
    //       entityId: '95565059',
    //       flightPlaceType: 'AIRPORT',
    //       localizedName: 'New York Newark',
    //     },
    //     relevantHotelParams: {
    //       entityId: '27537542',
    //       entityType: 'CITY',
    //       localizedName: 'New York',
    //     },
    //   },
    // },
    // {
    //   skyId: 'JFK',
    //   entityId: '95565058',
    //   presentation: {
    //     title: 'New York John F. Kennedy',
    //     suggestionTitle: 'New York John F. Kennedy (JFK)',
    //     subtitle: 'United States',
    //   },
    //   navigation: {
    //     entityId: '95565058',
    //     entityType: 'AIRPORT',
    //     localizedName: 'New York John F. Kennedy',
    //     relevantFlightParams: {
    //       skyId: 'JFK',
    //       entityId: '95565058',
    //       flightPlaceType: 'AIRPORT',
    //       localizedName: 'New York John F. Kennedy',
    //     },
    //     relevantHotelParams: {
    //       entityId: '27537542',
    //       entityType: 'CITY',
    //       localizedName: 'New York',
    //     },
    //   },
    // },
    // {
    //   skyId: 'LGA',
    //   entityId: '95565057',
    //   presentation: {
    //     title: 'New York LaGuardia',
    //     suggestionTitle: 'New York LaGuardia (LGA)',
    //     subtitle: 'United States',
    //   },
    //   navigation: {
    //     entityId: '95565057',
    //     entityType: 'AIRPORT',
    //     localizedName: 'New York LaGuardia',
    //     relevantFlightParams: {
    //       skyId: 'LGA',
    //       entityId: '95565057',
    //       flightPlaceType: 'AIRPORT',
    //       localizedName: 'New York LaGuardia',
    //     },
    //     relevantHotelParams: {
    //       entityId: '27537542',
    //       entityType: 'CITY',
    //       localizedName: 'New York',
    //     },
    //   },
    // },
    // {
    //   skyId: 'SWF',
    //   entityId: '95566280',
    //   presentation: {
    //     title: 'Stewart International',
    //     suggestionTitle: 'Stewart International (SWF)',
    //     subtitle: 'United States',
    //   },
    //   navigation: {
    //     entityId: '95566280',
    //     entityType: 'AIRPORT',
    //     localizedName: 'Stewart International',
    //     relevantFlightParams: {
    //       skyId: 'SWF',
    //       entityId: '95566280',
    //       flightPlaceType: 'AIRPORT',
    //       localizedName: 'Stewart International',
    //     },
    //     relevantHotelParams: {
    //       entityId: '27537542',
    //       entityType: 'CITY',
    //       localizedName: 'New York',
    //     },
    //   },
    // },
    // {
    //   skyId: 'NCL',
    //   entityId: '95674044',
    //   presentation: {
    //     title: 'Newcastle',
    //     suggestionTitle: 'Newcastle (NCL)',
    //     subtitle: 'United Kingdom',
    //   },
    //   navigation: {
    //     entityId: '95674044',
    //     entityType: 'AIRPORT',
    //     localizedName: 'Newcastle',
    //     relevantFlightParams: {
    //       skyId: 'NCL',
    //       entityId: '95674044',
    //       flightPlaceType: 'AIRPORT',
    //       localizedName: 'Newcastle',
    //     },
    //     relevantHotelParams: {
    //       entityId: '27545092',
    //       entityType: 'CITY',
    //       localizedName: 'Newcastle',
    //     },
    //   },
    // },
    // {
    //   skyId: 'NQY',
    //   entityId: '95673963',
    //   presentation: {
    //     title: 'Newquay',
    //     suggestionTitle: 'Newquay (NQY)',
    //     subtitle: 'United Kingdom',
    //   },
    //   navigation: {
    //     entityId: '95673963',
    //     entityType: 'AIRPORT',
    //     localizedName: 'Newquay',
    //     relevantFlightParams: {
    //       skyId: 'NQY',
    //       entityId: '95673963',
    //       flightPlaceType: 'AIRPORT',
    //       localizedName: 'Newquay',
    //     },
    //     relevantHotelParams: {
    //       entityId: '27545149',
    //       entityType: 'CITY',
    //       localizedName: 'Newquay',
    //     },
    //   },
    // },
    // {
    //   skyId: 'NZ',
    //   entityId: '29475342',
    //   presentation: {
    //     title: 'New Zealand',
    //     suggestionTitle: 'New Zealand',
    //     subtitle: '',
    //   },
    //   navigation: {
    //     entityId: '29475342',
    //     entityType: 'COUNTRY',
    //     localizedName: 'New Zealand',
    //     relevantFlightParams: {
    //       skyId: 'NZ',
    //       entityId: '29475342',
    //       flightPlaceType: 'COUNTRY',
    //       localizedName: 'New Zealand',
    //     },
    //     relevantHotelParams: {
    //       entityId: '29475342',
    //       entityType: 'COUNTRY',
    //       localizedName: 'New Zealand',
    //     },
    //   },
    // },
    {
      skyId: 'OM',
      entityId: '29475213',
      presentation: {
        title: 'Oman',
        suggestionTitle: 'Oman',
        subtitle: '',
      },
      navigation: {
        entityId: '29475213',
        entityType: 'COUNTRY',
        localizedName: 'Oman',
        relevantFlightParams: {
          skyId: 'OM',
          entityId: '29475213',
          flightPlaceType: 'COUNTRY',
          localizedName: 'Oman',
        },
        relevantHotelParams: {
          entityId: '29475213',
          entityType: 'COUNTRY',
          localizedName: 'Oman',
        },
      },
    },
    {
      skyId: 'MCT',
      entityId: '104120234',
      presentation: {
        title: 'Muscat',
        suggestionTitle: 'Muscat (MCT)',
        subtitle: 'Oman',
      },
      navigation: {
        entityId: '104120234',
        entityType: 'AIRPORT',
        localizedName: 'Muscat',
        relevantFlightParams: {
          skyId: 'MCT',
          entityId: '104120234',
          flightPlaceType: 'AIRPORT',
          localizedName: 'Muscat',
        },
        relevantHotelParams: {
          entityId: '27544877',
          entityType: 'CITY',
          localizedName: 'Muscat',
        },
      },
    },
    {
      skyId: 'SLL',
      entityId: '95674086',
      presentation: {
        title: 'Salalah',
        suggestionTitle: 'Salalah (SLL)',
        subtitle: 'Oman',
      },
      navigation: {
        entityId: '95674086',
        entityType: 'AIRPORT',
        localizedName: 'Salalah',
        relevantFlightParams: {
          skyId: 'SLL',
          entityId: '95674086',
          flightPlaceType: 'AIRPORT',
          localizedName: 'Salalah',
        },
        relevantHotelParams: {
          entityId: '27546390',
          entityType: 'CITY',
          localizedName: 'Salalah',
        },
      },
    },
    {
      skyId: 'OHS',
      entityId: '144763769',
      presentation: {
        title: 'Sohar',
        suggestionTitle: 'Sohar (OHS)',
        subtitle: 'Oman',
      },
      navigation: {
        entityId: '144763769',
        entityType: 'AIRPORT',
        localizedName: 'Sohar',
        relevantFlightParams: {
          skyId: 'OHS',
          entityId: '144763769',
          flightPlaceType: 'AIRPORT',
          localizedName: 'Sohar',
        },
        relevantHotelParams: {
          entityId: '44571732',
          entityType: 'CITY',
          localizedName: 'Sohar',
        },
      },
    },
    {
      skyId: 'KHS',
      entityId: '128667804',
      presentation: {
        title: 'Khasab',
        suggestionTitle: 'Khasab (KHS)',
        subtitle: 'Oman',
      },
      navigation: {
        entityId: '128667804',
        entityType: 'AIRPORT',
        localizedName: 'Khasab',
        relevantFlightParams: {
          skyId: 'KHS',
          entityId: '128667804',
          flightPlaceType: 'AIRPORT',
          localizedName: 'Khasab',
        },
        relevantHotelParams: {
          entityId: '39559357',
          entityType: 'CITY',
          localizedName: 'Khasab',
        },
      },
    },
    {
      skyId: 'DQM',
      entityId: '144763781',
      presentation: {
        title: 'Duqm International',
        suggestionTitle: 'Duqm International (DQM)',
        subtitle: 'Oman',
      },
      navigation: {
        entityId: '144763781',
        entityType: 'AIRPORT',
        localizedName: 'Duqm International',
        relevantFlightParams: {
          skyId: 'DQM',
          entityId: '144763781',
          flightPlaceType: 'AIRPORT',
          localizedName: 'Duqm International',
        },
        relevantHotelParams: {
          entityId: '44572428',
          entityType: 'CITY',
          localizedName: 'Duqm',
        },
      },
    },
    {
      skyId: 'MSH',
      entityId: '129056957',
      presentation: {
        title: 'Masirah',
        suggestionTitle: 'Masirah (MSH)',
        subtitle: 'Oman',
      },
      navigation: {
        entityId: '129056957',
        entityType: 'AIRPORT',
        localizedName: 'Masirah',
        relevantFlightParams: {
          skyId: 'MSH',
          entityId: '129056957',
          flightPlaceType: 'AIRPORT',
          localizedName: 'Masirah',
        },
        relevantHotelParams: {
          entityId: '44571704',
          entityType: 'CITY',
          localizedName: 'Masirah',
        },
      },
    },
    {
      skyId: 'UKH',
      entityId: '186837499',
      presentation: {
        title: 'Mukhaizna',
        suggestionTitle: 'Mukhaizna (UKH)',
        subtitle: 'Oman',
      },
      navigation: {
        entityId: '186837499',
        entityType: 'AIRPORT',
        localizedName: 'Mukhaizna',
        relevantFlightParams: {
          skyId: 'UKH',
          entityId: '186837499',
          flightPlaceType: 'AIRPORT',
          localizedName: 'Mukhaizna',
        },
        relevantHotelParams: {
          entityId: '44572223',
          entityType: 'CITY',
          localizedName: "Haymā'",
        },
      },
    },
  ],
};
