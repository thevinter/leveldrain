import siteMetadata from '@/data/siteMetadata'
import cemeteryData from '@/data/cemeteryData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import DeathCard from '@/components/DeathCard'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Cemetery - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Cemetery
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A list of valiant heroes that died over the years
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-col flex-wrap">
            {cemeteryData.map((d) => (
              <DeathCard character={d} key={d.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
