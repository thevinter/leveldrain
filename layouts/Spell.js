import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { useRouter } from 'next/router'

function getHref(pageName) {
  if (pageName.includes('magic-user')) return '/srd/rules/magic-user-spells'
  if (pageName.includes('druid')) return '/srd/rules/druid-spells'
  if (pageName.includes('illusionist')) return '/srd/rules/illusionist-spells'
  if (pageName.includes('cleric')) return '/srd/rules/cleric-spells'
}

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { title, type, level, range, duration, aoe, components, cast, save } = frontMatter
  const router = useRouter()
  console.log(router.pathname)

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/srd/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <div>
                <PageTitle>{title}</PageTitle>
                <div>{type}</div>
              </div>
              <div className="font-bold underline" style={{ textAlign: 'left' }}>
                <Link href={getHref(router.pathname)} passHref>
                  <a href="#">{'< Go Back To Spell List'}</a>
                </Link>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div>
                <b>Level:</b> {level}
              </div>
              <div>
                <b>Range:</b> {range}
              </div>
              <div>
                <b>Duration:</b> {duration}
              </div>
              <div>
                <b>Area of Effect:</b> {aoe}
              </div>
              <div>
                <b>Components:</b> {components}
              </div>
              <div>
                <b>Casting Time:</b> {cast}
              </div>
              <div>
                <b>Saving Throw:</b> {save}
              </div>
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
