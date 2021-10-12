import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import { Main } from './pages/Main'
// import { EmployeeRegistration } from './pages/EmployeeRegistration'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          {/* { <Route path="/EmployeeRegistration" exact component={EmployeeRegistration} /> */}
          {/* // <Route path="/menuburgers" exact component={MenuBurgers} />
          // <Route path="/menuperros" exact component={MenuPerros} /> } */}
        </Switch>
      </Router>
    </div>
  )
}
export default App
