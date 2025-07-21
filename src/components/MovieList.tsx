
import UpcomingMovies from "./UpcomingMovies";

function MovieList() {
  return (
    <div className="bg-black p-6 min-h-screen">
      
      <div className="flex flex-col gap-6">
        <h1 className="text-white text-sm font-bold">SEPTEMBER</h1>
        <hr className="border-t border-primary-500" />
        <div className="grid grid-flow-col grid-rows-4">
          <UpcomingMovies
            num="14"
            title="Moana 2"
            subtitle="Worldwide"
            month="september"
            image="/Images/Moana 2.png"
          />
          <UpcomingMovies
            num="19"
            title="Oppenheimer"
            subtitle="Worldwide"
            month="september"
            image="/Images/oppenheimer.png"
          />
          <UpcomingMovies
            num="19"
            title="Spiderman: Across the Spiderverse"
            subtitle="Worldwide"
            month="september"
            image="/Images/Spiderman Across the spiderversee.png"
          />
          <UpcomingMovies
            num="23"
            title="Avengers: Endgame"
            subtitle="Worldwide"
            month="september"
            image="/Images/Avengers Endgame.png"
          />
          <UpcomingMovies
            num="28"
            title="Avengers: Doomsday"
            subtitle="Worldwide"
            month="september"
            image="/Images/Avengers Doomsday.png"
          />
          <UpcomingMovies
            num="30"
            title="The Batman 2"
            subtitle="Worldwide"
            month="september"
            image="/Images/The Batman 2.png"
          />
        </div>
      </div>

    
      <div className="flex flex-col gap-6 mt-12">
        <h1 className="text-white text-sm font-bold">OCTOBER</h1>
        <hr className="border-t border-primary-500" />
        <div className="grid grid-flow-col grid-rows-4">
          <UpcomingMovies
            num="07"
            title="Mission Impossible: Dead Reckoning Part 2"
            subtitle="Worldwide"
            month="october"
            image="/Images/Mission Impossible Dead Recoking Part 2.png"
          />
          <UpcomingMovies
            num="17"
            title="Oppenheimer"
            subtitle="Worldwide"
            month="october"
            image="/Images/oppenheimer.png"
          />
          <UpcomingMovies
            num="19"
            title="Spiderman: Across the Spiderverse"
            subtitle="Worldwide"
            month="october"
            image="/Images/Spiderman Across the spiderversee.png"
          />
          <UpcomingMovies
            num="23"
            title="Captain America: Brave New World"
            subtitle="Worldwide"
            month="october"
            image="/Images/Captain America Brave New World.png"
          />
          <UpcomingMovies
            num="24"
            title="Venom: The Last Dance"
            subtitle="Worldwide"
            month="october"
            image="/Images/Venom The Last Dance.png"
          />
        </div>
      </div>

    
      <div className="flex flex-col gap-6 mt-12">
        <h1 className="text-white text-sm font-bold">NOVEMBER</h1>
        <hr className="border-t border-primary-500" />
        <div className="grid grid-flow-col grid-rows-4">
          <UpcomingMovies
            num="01"
            title="Avengers: Doomsday"
            subtitle="Worldwide"
            month="november"
            image="/Images/Avengers Doomsday.png"
          />
          <UpcomingMovies
            num="12"
            title="Deadpool & Wolverine"
            subtitle="Worldwide"
            month="november"
            image="/Images/Deadpool & Wolverine.png"
          />
          <UpcomingMovies
            num="17"
            title="Kingdom of the Planet of the Apes"
            subtitle="Worldwide"
            month="november"
            image="/Images/Kingdom of the Planet of the Apes .png"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieList;
