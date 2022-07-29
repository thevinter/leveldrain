import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import DeathCard from '@/components/DeathCard'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`OSRIC SRD - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            OSRIC SRD
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            All of the OSRIC rules in one place
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-col flex-wrap">
            <h1 className="text-2xl">Creating A Character:</h1>
            <div className="py-10 pl-5">
              <h4 className="font-bold text-gray-700 underline">
                <Link href="/srd/rules/stats">Ability Scores</Link>
              </h4>
              <h4 className="pt-5 text-xl font-bold">Races:</h4>
              <ul className="list-disc pl-10 text-gray-700 underline">
                <li className="underline">
                  <Link href="/srd/races/dwarfs">Dwarfs</Link>
                </li>
                <li className="underline">
                  <Link href="/srd/races/elves">Elves</Link>
                </li>
                <li className="underline">
                  <Link href="/srd/races/gnomes">Gnomes</Link>
                </li>
                <li className="underline">
                  <Link href="/srd/races/half-elves">Half-Elves</Link>
                </li>
                <li className="underline">
                  <Link href="/srd/races/half-orcs">Half-Orcs</Link>
                </li>
                <li className="underline">
                  <Link href="/srd/races/halflings">Halflings</Link>
                </li>
                <li className="underline">
                  <Link href="/srd/races/humans">Humans</Link>
                </li>
              </ul>
              <h4 className="pt-5 text-xl font-bold">Classes:</h4>
              <ul className="list-disc pl-10 pb-5 text-gray-700 underline">
                <li className="underline">
                  <Link href="/srd/classes/assassin">Assassin</Link>
                </li>
                <li className="underline">
                  <Link href="/srd/classes/cleric">Cleric</Link>
                </li>
                <li className="underline">
                  <Link href="/srd/classes/druid">Druid</Link>
                </li>
                <li className="underline">
                  <Link href="/srd/classes/fighter">Fighter</Link>
                </li>
                <li>
                  <Link href="/srd/classes/illusionist">Illusionist</Link>
                </li>
                <li>
                  <Link href="/srd/classes/magic-user">Magic User</Link>
                </li>
                <li className="underline">
                  <Link href="/srd/classes/paladin">Paladin</Link>
                </li>
                <li className="underline">
                  <Link href="/srd/classes/ranger">Ranger</Link>
                </li>
                <li className="underline">
                  <Link href="/srd/classes/thief">Thief</Link>
                </li>
              </ul>
              <h4 className="font-bold text-gray-700 underline">
                <Link href="/srd/rules/multiclassing-dualclassing">Multiclassing</Link>
              </h4>
              <h4 className="font-bold text-gray-700 underline">
                <Link href="/srd/rules/alignment">Alignment</Link>
              </h4>
              <h4 className="font-bold text-gray-700 underline">
                <Link href="/srd/rules/money">Money</Link>
              </h4>
              <h4 className="font-bold text-gray-700 underline">
                <Link href="/srd/rules/equipment">Equipment</Link>
              </h4>
            </div>

            <div className="container pb-20">
              <div className="-m-4">
                <h1 className="mb-5 text-2xl">Spells:</h1>
                <ul className="list-disc pl-10 text-gray-700 underline">
                  <li className="underline">
                    <Link href="/srd/rules/cleric-spells">Cleric Spells</Link>
                  </li>
                  <li className="underline">
                    <Link href="/srd/rules/druid-spells">Druid Spells</Link>
                  </li>
                  <li className="underline">
                    <Link href="/srd/rules/magic-user-spells">Magic User Spells</Link>
                  </li>
                  <li className="underline">
                    <Link href="/srd/rules/illusionist-spells">Illusionist Spells</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container pb-20">
              <div className="-m-4">
                <h1 className="mb-5 text-2xl">
                  <Link href="/srd/rules/how-to-play">How To Play The First Time</Link>
                </h1>
                <div className="ml-5">
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/time-measurement">Time Measurement</Link>
                  </h4>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/movement">Movement</Link>
                  </h4>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/encumbrance-and-base-movement-rate">
                      Encumbrance And Base Movement Rate
                    </Link>
                  </h4>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/gaining-levels">Gaining Levels</Link>
                  </h4>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/experience">Experience</Link>
                  </h4>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/light-and-vision">Light And Vision</Link>
                  </h4>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/infravision">Infravision</Link>
                  </h4>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/falling">Falling</Link>
                  </h4>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/item-saving-throws">Item Saving Throws</Link>
                  </h4>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/combat">Combat</Link>
                  </h4>
                  <ul className="list-disc pl-10 text-gray-700 underline">
                    <li className="underline">
                      <Link href="/srd/rules/combat-actions">Combat Actions</Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/combat-modifiers">Combat Modifiers</Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/attack-and-saving-throw-matrices-for-monsters">
                        Attack And Saving Throw Matrices For Monsters
                      </Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/turning-the-undead">Turning The Undead</Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/damage-and-death">Damage And Death</Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/natural-healing">Natural Healing</Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/subdual-damage">Subdual Damage</Link>
                    </li>
                  </ul>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/life-energy-levels-and-leveldrain">
                      Life Energy Levels and Level Drain
                    </Link>
                  </h4>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/morale">Morale</Link>
                  </h4>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/poison-disease-insanity">
                      Poison, Disease and Insanity
                    </Link>
                  </h4>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/hirelings-and-henchmen">Hirelings And Henchmen</Link>
                  </h4>
                  <ul className="list-disc pl-10 text-gray-700 underline">
                    <li className="underline">
                      <Link href="/srd/rules/standard-hirelings">Standard Hirelings</Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/expert-hirelings">Expert Hirelings</Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/henchmen">Henchmen</Link>
                    </li>
                  </ul>
                  <h4 className="font-bold text-gray-700 underline">
                    <Link href="/srd/rules/how-to-play">Adventure And Exploration</Link>
                  </h4>
                  <ul className="list-disc pl-10 text-gray-700 underline">
                    <li className="underline">
                      <Link href="/srd/rules/searching-the-dungeon">Searching The Dungeon</Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/exploring-the-wilderness">
                        Exploring The Wilderness
                      </Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/aerial-agility">Aerial Agility</Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/adventures-in-town">Adventures In Town</Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/exploring-the-planes">Exploring The Planes</Link>
                    </li>
                    <li className="underline">
                      <Link href="/srd/rules/an-example-dungeon">An Example Dungeon</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="container py-12">
                <div className="-m-4">
                  <div className="ml-5">
                    <h1 className="-ml-5 mb-5 text-2xl">Dungeons, Towns and Wildernesses</h1>
                    <h4 className="font-bold text-gray-700 underline">
                      <Link href="/srd/rules/dungeons">Dungeons</Link>
                    </h4>
                    <ul className="list-disc pl-10 text-gray-700 underline">
                      <li className="underline">
                        <Link href="/srd/rules/trap-generation-and-placement">
                          Trap Generation And Placement
                        </Link>
                      </li>
                      <li className="underline">
                        <Link href="/srd/rules/random-dungeon-generation">
                          Random Dungeon Generation
                        </Link>
                      </li>
                    </ul>
                    <h4 className="font-bold text-gray-700 underline">Random Encounters</h4>
                    <ul className="list-disc pl-10 text-gray-700 underline">
                      <li className="underline">
                        <Link href="/srd/rules/random-dungeon-encounters">
                          Random Dungeon Encounters
                        </Link>
                      </li>
                      <li className="underline">
                        <Link href="/srd/rules/random-urban-encounters">
                          Random Urban Encounters
                        </Link>
                      </li>
                      <li className="underline">
                        <Link href="/srd/rules/random-wilderness-encounters">
                          Random Wilderness Encounters
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3">
              Consider{' '}
              <Link
                className="underline"
                href="https://www.paypal.com/donate/?hosted_button_id=7VJZJ37XBHTNQ"
                passHref
              >
                <a className="underline" href="">
                  donating to show appreciation and help development
                </a>
              </Link>
            </div>
            <div className="py-2">
              Rules taken directly from the{' '}
              <Link className="underline" href="https://www.osricrpg.com/files/OSRIC.pdf" passHref>
                <a className="underline" href="">
                  OSRIC document{' '}
                </a>
              </Link>
              and distributed under the{' '}
              <Link className="underline" href="https://osricrpg.com/license.php" passHref>
                <a className="underline" href="">
                  OSRIC Open Licence and the Oepen Gaming Licence{' '}
                </a>
              </Link>
            </div>
            <div className="py-2">
              OSRIC copyright 2006-08 by Stuart Marshall, adapting material prepared by Matthew J .
              Finch, based on the System Reference Document, inspired by the works of E . Gary
              Gygax, Dave Arneson, and many others" and "OSRIC Chapter I copyright 2006-08 by Stuart
              Marshall. OSRIC Chapter II copyright 2006-08 by Stuart Marshall. OSRIC Chapter III
              copyright 2006-08 by Stuart Marshall, Trent Foster, James Boney and Vincent Frugé.
              OSRIC Chapter IV copyright 2006-08 by Stuart Marshall, Trent Foster, James Boney and
              Vincent Frugé. OSRIC Chapter V copyright 2007-08 by Stuart Marshall, Chris Hopkins,
              James Boney, Robert Ross, Jeremy Goehring, Mike Davison, Daniel Proctor, B . Scot
              Hoover, Chris Cain, Bill Silvey, Floyd Canaday, Vincent Frugé and Matthew James
              Stanham. OSRIC Chapter VI copyright 2007-08 by Stuart Marshall, Daniel Proctor and
              Vincent Frugé. OSRIC appendices copyright 2006-08 by Stuart Marshall and James D.
              Kramer.
            </div>
            <div>
              This product uses the OSRIC™ System (Oldschool System Reference and Index
              Compilation™). The OSRIC™ system text may be found at
              http://www.knights-n-knaves.com/osric. The OSRIC™ text is copyright of Stuart
              Marshall. "OSRIC™" and "Oldschool System Reference and Index Compilation™" are
              trademarks of Stuart Marshall and Matthew Finch and may be used only in accordance
              with the OSRIC™ license.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
