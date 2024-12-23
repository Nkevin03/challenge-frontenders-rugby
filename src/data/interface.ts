export interface Team {
  name: string;
  score: number;
  conference: string;
  position: number;
  logo: string;
  color: string;
  themeImage: string;
}

export interface Match {
  place: string;
  type: string;
  teams: Team[];
}

export interface Day {
  date: string;
  matches: Match[];
}

export interface MatchData {
  data: Day[];
}

export const matchData: MatchData = {
  data: [
    {
      date: "Fri 28 Oct",
      matches: [
        {
          place: "scotstoun stadium",
          type: "full time",
          teams: [
            {
              name: "Glasgow Warriors",
              score: 37,
              conference: "p",
              position: 7,
              logo: "glassgow-warriors.png",
              color: "90, 170, 240",
              themeImage: "blue-background-1",
            },
            {
              name: "Benetton",
              score: 0,
              conference: "p",
              position: 11,
              logo: "benetton.png",
              color: "0, 180, 110",
              themeImage: "green-background-1",
            },
          ],
        },
        {
          place: "parc y scarlets",
          type: "full time",
          teams: [
            {
              name: "Scarlets",
              score: 5,
              conference: "p",
              position: 15,
              logo: "scarlets.png",
              color: "70, 0, 20",
              themeImage: "red-background-1",
            },
            {
              name: "Leinster",
              score: 35,
              conference: "p",
              position: 1,
              logo: "leinster.png",
              color: "0, 50, 135",
              themeImage: "blue-background-2",
            },
          ],
        },
      ],
    },
    {
      date: "SAT 29 OCT",
      matches: [
        {
          place: "emirates airline park",
          type: "full time",
          teams: [
            {
              name: "Emirates lions",
              score: 22,
              conference: "p",
              position: 9,
              logo: "emirates-lions.png",
              color: "255, 30, 40",
              themeImage: "red-background-2",
            },
            {
              name: "DHL Stormers",
              score: 31,
              conference: "p",
              position: 4,
              logo: "dhl-stormers.png",
              color: "225, 0, 30",
              themeImage: "red-background-3",
            },
          ],
        },
        {
          place: "rodney parade",
          type: "full time",
          teams: [
            {
              name: "Dragons",
              score: 47,
              conference: "p",
              position: 10,
              logo: "dragons.png",
              color: "255, 170, 0",
              themeImage: "yellow-background-1",
            },
            {
              name: "Zebre Parma",
              score: 7,
              conference: "p",
              position: 16,
              logo: "zebre.png",
              color: "255, 0, 195",
              themeImage: "yellow-background-2",
            },
          ],
        },
        {
          place: "thimond park",
          type: "full time",
          teams: [
            {
              name: "Munster",
              score: 14,
              conference: "p",
              position: 14,
              logo: "munster.png",
              color: "205, 10, 45",
              themeImage: "red-background-5",
            },
            {
              name: "Ulster",
              score: 15,
              conference: "p",
              position: 2,
              logo: "ulster.png",
              color: "230, 30, 30",
              themeImage: "red-background-4",
            },
          ],
        },
        {
          place: "swansea.com stadium",
          type: "full time",
          teams: [
            {
              name: "Ospreys",
              score: 19,
              conference: "p",
              position: 13,
              logo: "ospreys.png",
              color: "90, 90, 100",
              themeImage: "black-background-2",
            },
            {
              name: "Connacht",
              score: 22,
              conference: "p",
              position: 12,
              logo: "connacht.png",
              color: "0, 180, 70",
              themeImage: "green-background-2",
            },
          ],
        },
      ],
    },
    {
      date: "SUN 30 OCT",
      matches: [
        {
          place: "loftus versfeld",
          type: "full time",
          teams: [
            {
              name: "Vodacom Bulls",
              score: 40,
              conference: "p",
              position: 3,
              logo: "vodacom-bulls.png",
              color: "0, 130, 230",
              themeImage: "blue-background-3",
            },
            {
              name: "Cell C Sharks",
              score: 27,
              conference: "p",
              position: 8,
              logo: "cell-c-sharks.png",
              color: "80, 75, 80",
              themeImage: "black-background-2",
            },
          ],
        },
        {
          place: "cardiff arms park",
          type: "full time",
          teams: [
            {
              name: "Cardiff Rugby",
              score: 17,
              conference: "p",
              position: 6,
              logo: "cardif-rugby.png",
              color: "110, 190, 255",
              themeImage: "blue-background-4",
            },
            {
              name: "Edinburgh",
              score: 25,
              conference: "p",
              position: 5,
              logo: "edinburgh.png",
              color: "30, 20, 75",
              themeImage: "red-background-6",
            },
          ],
        },
      ],
    },
  ],
};
