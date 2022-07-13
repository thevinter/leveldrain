export default function DeathCard({ character }) {
  return (
    <div className="flex content-center py-5 pl-4 align-middle">
      <div className="h-20 w-20 rounded-full shadow-sm">
        <img
          className="border-1 rounded-full border-black shadow-lg"
          src={`/static/images/characters/${character.name}.jpg`}
        />
      </div>
      <div className="place-self-center pl-5 font-bold">{character.name}✟</div>
      <div className="place-self-center">
        , a lv. {character.level} {character.race} {character.class} - {character.death}
      </div>
    </div>
  )
}
