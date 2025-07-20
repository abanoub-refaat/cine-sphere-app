import UpcomingMovies from "./UpcomingMovies";

function MovieList() {
  return (
    <div className="bg-black p-6 min-h-screen flex flex-col flex-wrap">
      <h1 className="text-white text-sm font-bold mb-6">SEPTEMBER</h1>
      <div className="grid grid-cols-2">
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

      <h1 className="text-white text-2xl font-bold mt-10 mb-6">October</h1>

        <div className="grid grid-cols-2 grid-rows-4 gap-4">

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
        image="/images/Venom The Last Dance.png"
      />
        </div>
    </div>
  );
}

export default MovieList;
