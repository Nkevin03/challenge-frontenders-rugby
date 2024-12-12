import { matchData } from "../data/interface";

export default function Card() {
  return (
    <div className="mx-auto mt-10">
      <h1 className="text-7xl font-bold mb-12">Calendario delle partite</h1>

      {matchData.data.map((day) => (
        <div className="mb-16" key={day.date}>
          <h2 className="text-3xl font-bold text-center mb-8">{day.date}</h2>

          <div className="grid grid-cols-2 gap-6">
            {day.matches.map((match) => (
              <div
                key={match.place}
                className="relative h-[400px] rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 flex">
                  <div className="w-1/2">
                    <img
                      src={`../src/assets/${match.teams[0].themeImage}.png`}
                      className="h-full w-full object-cover"
                      alt={match.teams[0].name}
                    />
                  </div>
                  <div className="w-1/2">
                    <img
                      src={`../src/assets/${match.teams[1].themeImage}.png`}
                      className="h-full w-full object-cover"
                      alt={match.teams[1].name}
                    />
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative inset-0 flex flex-col justify-between p-8 z-10 h-full">
                  <div className="flex justify-between">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg w-1/2 text-right">
                      {match.teams[0].name}
                    </h3>
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg text-left">
                      {match.teams[1].name}
                    </h3>
                  </div>
                  {/* <div className="">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                      {match.teams[0].name}
                    </h3>
                    <h3 className="text-3xl text-left font-bold text-white drop-shadow-lg">
                      {match.teams[1].name}
                    </h3>
                  </div> */}
                  <div className="text-center">
                    <span className="uppercase text-xl font-bold mb-4 block text-white drop-shadow-lg">
                      {match.place}
                    </span>

                    <div className="flex items-center justify-center gap-8">
                      <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                          <img
                            className="w-16 h-16 object-contain mb-2"
                            src={`../src/assets/${match.teams[0].logo}`}
                            alt={match.teams[0].name}
                          />
                          <div className="space-y-1">
                            <span className="text-3xl font-bold block text-white drop-shadow-lg">
                              {match.teams[0].score}
                            </span>
                            <span className="text-sm uppercase text-white/80">
                              Pos: {match.teams[0].position}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="text-2xl font-bold block text-white drop-shadow-lg">
                          VS
                        </span>
                        <span className="text-sm uppercase text-white/80">
                          {match.type}
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                          <img
                            className="w-16 h-16 object-contain mb-2"
                            src={`../src/assets/${match.teams[1].logo}`}
                            alt={match.teams[1].name}
                          />
                          <div className="space-y-1">
                            <span className="text-3xl font-bold block text-white drop-shadow-lg">
                              {match.teams[1].score}
                            </span>
                            <span className="text-sm uppercase text-white/80">
                              Pos: {match.teams[1].position}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
