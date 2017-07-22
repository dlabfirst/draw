import * as React from 'react'
import { uniqueId, memoize } from 'lodash'
import {
  HashRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom'

import GS from 'pages/cl/gs'
import Last16 from 'pages/cl/last16'

import Wait from 'components/Wait'

import { fetchPots, parseGS } from 'utils/fetch-parse-pots'
import getCountryFlagUrl from 'utils/getCountryFlagUrl'
import prefetchImage from 'utils/prefetchImage'
import currentSeason from 'utils/currentSeason'
import { GSTeam } from 'utils/team'

import Links from './links'
import Route from './Route'
import history from './history'

interface Props {}

interface State {
  key: string,
  season: number,
  pots: GSTeam[][] | null,
  waiting: boolean,
}

class Routes extends React.PureComponent<Props, State> {
  componentDidMount() {
    this.onSeasonChange(currentSeason)
  }

  state = {
    key: uniqueId(),
    season: currentSeason,
    pots: null,
    waiting: false,
  }

  refresh = () => {
    this.setState({
      key: uniqueId(),
    })
  }

  getPots = memoize(async (season: number) => {
    const data = await fetchPots(season)
    return parseGS(data)
  })

  prefetchImages(pots: GSTeam[][]) {
    const promises: Promise<void>[] = []
    for (const pot of pots) {
      promises.push(...pot.map(team => getCountryFlagUrl(team.country)).map(prefetchImage))
    }
    return Promise.all(promises)
  }

  onSeasonChange = async (season: number) => {
    this.setState({
      waiting: true,
    })
    const pots = await this.getPots(season)
    await this.prefetchImages(pots)
    this.setState({
      season,
      pots,
      waiting: false,
      key: uniqueId(),
    })
  }

  render() {
    const {
      key,
      pots,
      waiting,
    } = this.state
    if (!pots) {
      return <Wait />
    }
    return (
      <Router history={history}>
        <div>
          {waiting &&
            <Wait />
          }
          <Links
            refresh={this.refresh}
            onSeasonChange={this.onSeasonChange}
          />
          <Switch>
            <Route path="/cl/gs">
              <GS
                key={key}
                pots={pots}
              />
            </Route>
            <Route path="/cl/last16">
              <Last16
                key={key}
                pots={pots}
              />
            </Route>
            <Redirect from="/cl" to="/cl/gs"/>
            <Redirect from="/" to="/cl/gs"/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Routes