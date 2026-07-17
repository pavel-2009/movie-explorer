import { ContinueList } from './ContinueList'
import { continueWatching } from '../../data/homePageContent'

export function ContinuePage() {
  return (
    <main className="main-content">
      <ContinueList continueWatching={continueWatching} />
    </main>
  )
}
