import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcPage } from '../dc/DcPage'
import { HeroPage } from '../heroes/HeroPage'
import { MarvelPage } from '../marvel/MarvelPage'
import { SearchPage } from '../search/SearchPage'
import { Navbar } from '../ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className = "container mt-2">
        <Switch>
          <Route exact path = "/marvel" component = { MarvelPage } />
          <Route exact path = "/hero/:heroId" component = { HeroPage } />
          <Route exact path = "/dc" component = { DcPage } />
          <Route exact path = "/search" component = { SearchPage } />

          <Redirect to = "/marvel" />
        </Switch>
      </div>
    </>
  )
}
