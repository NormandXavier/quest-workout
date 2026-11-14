import { useEffect, useState } from 'react'
import { APP_NAME, BUILD_STEP } from './version'

function useOnline() {
  const [online, setOnline] = useState(navigator.onLine)
  useEffect(() => {
    const on = () => setOnline(true)
    const off = () => setOnline(false)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => {
      window.removeEventListener('online', on)
      window.removeEventListener('offline', off)
    }
  }, [])
  return online
}

export default function App() {
  const online = useOnline()
  const standalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true

  return (
    <main className="screen">
      <section className="panel">
        <header className="panel-title">System</header>
        <h1>{APP_NAME}</h1>
        <p className="message">The System is online. No quests have been issued yet.</p>
        <dl className="status">
          <div>
            <dt>Build step</dt>
            <dd>{BUILD_STEP}</dd>
          </div>
          <div>
            <dt>Connection</dt>
            <dd>{online ? 'Online' : 'Offline'}</dd>
          </div>
          <div>
            <dt>Installed</dt>
            <dd>{standalone ? 'Yes' : 'No (Share, then Add to Home Screen)'}</dd>
          </div>
        </dl>
      </section>
    </main>
  )
}
