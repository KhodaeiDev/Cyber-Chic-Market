
import { useRoutes } from 'react-router-dom'
import routes from './route'

function App() {
  const router = useRoutes(routes)

  return (
    router
  )
}

export default App
