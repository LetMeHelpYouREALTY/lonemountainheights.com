import { getPageDomainConfig } from '@/lib/get-domain-config'
import RealScoutListings from './RealScoutListings'

/** RealScout block with hostname-aware price band and copy. */
export default async function DomainRealScoutListings() {
  const config = await getPageDomainConfig()
  return <RealScoutListings config={config} />
}