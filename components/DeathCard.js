export default function DeathCard({ character }) {
  return (
    <div className="flex flex-col items-center p-4 py-5 align-middle sm:pl-0 lg:flex-row">
      <div className="h-20 w-20 content-center rounded-full shadow-sm">
        <img
          className="border-1 rounded-full border-black shadow-lg"
          src={`/static/images/characters/${character.name}.jpg`}
        />
      </div>
      <div className="flex flex-col pt-7 sm:flex-row md:pt-0">
        <div className="place-self-center font-bold md:pl-5">{character.name}✟</div>
        <div className="place-self-center text-justify md:pl-2">
          a lv. {character.level} {character.race} {character.class} - {character.death}
        </div>
      </div>
    </div>
  )
}
