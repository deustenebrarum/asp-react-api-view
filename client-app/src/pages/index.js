import { Routes, Route } from "react-router-dom";
import Home from './home';

const routes = [
  ['/', Home],
]

const routesMap = routes.map(([path, Component]) => {
  return ( 
    <Route path={path} element={<Component/>}/>
  )
})

export function MappedRoutes() {
    return (
        <Routes>
          {routesMap}
        </Routes>
      );
}