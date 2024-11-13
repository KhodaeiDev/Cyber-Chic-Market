
import { useRoutes } from 'react-router-dom'
import routes from './route'

function App() {
  const router = useRoutes(routes)
  return (
    <div className=" bg-white text-sky-950">
      {
        router
      }
    </div>
  )
}

export default App
