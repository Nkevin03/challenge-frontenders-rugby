import { matchData } from "../data/interface";

export default function Card() {
  return (
    <div className="mx-auto mt-10 px-4">
      <h1 className="text-4xl md:text-7xl font-bold mb-8 md:mb-12 text-center">
        Calendario delle partite
      </h1>

      {matchData.data.map((day) => (
        <div className="mb-8 md:mb-16" key={day.date}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
            {day.date}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {day.matches.map((match) => (
              <div
                key={match.place}
                className="relative h-[500px] md:h-[400px] rounded-xl overflow-hidden"
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

                <div className="relative inset-0 flex flex-col justify-between p-4 md:p-8 z-10 h-full">
                  <div className="w-full absolute top-0 left-1/2 -translate-x-1/2 text-center">
                    <span className="text-sm md:text-base text-center bg-red-600 font-bold text-white drop-shadow-lg w-1/2 py-2 px-4 rounded-b-lg">
                      Full time
                    </span>
                  </div>
                  
                  <div className="flex justify-between pt-5">
                    <h3 className="text-xl md:text-3xl font-bold text-white drop-shadow-lg w-1/2 text-right pe-2 md:pe-4">
                      {match.teams[0].name}
                    </h3>
                    <h3 className="w-1/2 text-xl md:text-3xl font-bold text-white drop-shadow-lg text-left ps-2 md:ps-4">
                      {match.teams[1].name}
                    </h3>
                  </div>

                  <div className="text-center">
                    <span className="uppercase text-base md:text-xl font-bold mb-2 md:mb-4 block text-white drop-shadow-lg">
                      {match.place}
                    </span>

                    <div className="flex items-center justify-center gap-4 md:gap-8">
                      <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-lg">
                          <img
                            className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2"
                            src={`../src/assets/${match.teams[0].logo}`}
                            alt={match.teams[0].name}
                          />
                          <div className="space-y-1">
                            <span className="text-2xl md:text-3xl font-bold block text-white drop-shadow-lg">
                              {match.teams[0].score}
                            </span>
                            <span className="text-xs md:text-sm uppercase text-white/80">
                              Pos: {match.teams[0].position}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <span className="text-xl md:text-2xl font-bold block text-white drop-shadow-lg">
                          VS
                        </span>
                        <span className="text-xs md:text-sm uppercase text-white/80">
                          {match.type}
                        </span>
                      </div>

                      <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-lg">
                          <img
                            className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2"
                            src={`../src/assets/${match.teams[1].logo}`}
                            alt={match.teams[1].name}
                          />
                          <div className="space-y-1">
                            <span className="text-2xl md:text-3xl font-bold block text-white drop-shadow-lg">
                              {match.teams[1].score}
                            </span>
                            <span className="text-xs md:text-sm uppercase text-white/80">
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
