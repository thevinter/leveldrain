import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import DeathCard from '@/components/DeathCard'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Cemetery - ${siteMetadata.author}`} description={siteMetadata.description} />
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
              <h4 className="pt-5 text-xl font-bold">Spells:</h4>
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
            <div>
              Rules taken directly from the
              <Link className="underline" href="https://www.osricrpg.com/files/OSRIC.pdf" passHref>
                <a className="underline" href="">
                  OSRIC document
                </a>
              </Link>
              and distributed under the OSRIC Open Licence
            </div>
            <div>
              Consider{' '}
              <Link
                className="underline"
                href="https://www.paypal.com/donate/?hosted_button_id=7VJZJ37XBHTNQ"
                passHref
              >
                <a className="underline" href="">
                  donating to show appretiation and help development
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
