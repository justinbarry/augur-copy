import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ReportingDispute from 'modules/reporting/components/reporting-dispute/reporting-dispute'
import { loadFullMarket } from 'modules/market/actions/load-full-market'
import { MARKET_ID_PARAM_NAME } from 'modules/routes/constants/param-names'
import { selectMarket } from 'modules/market/selectors/market'
import parseQuery from 'modules/routes/helpers/parse-query'
import getValue from 'utils/get-value'
import { submitInitialReport } from 'modules/reporting/actions/submit-initial-report'
import { constants } from 'services/augurjs'

const mapStateToProps = state => ({
  isLogged: state.isLogged,
  // might need to call get market cost breakdown, it's on market from augur-node
  isConnected: state.connection.isConnected,
  universe: state.universe.id,
  marketsData: state.marketsData,
  isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
  loadFullMarket: marketId => dispatch(loadFullMarket(marketId)),
  submitInitialReport: (marketId, outcomeValue, invalid, history) => dispatch(submitInitialReport(marketId, outcomeValue, invalid, history)),
})


const mergeProps = (sP, dP, oP) => {
  const marketId = parseQuery(oP.location.search)[MARKET_ID_PARAM_NAME]
  const market = selectMarket(marketId)
  const isOpenReporting = market.reportingState === constants.REPORTING_STATE.OPEN_REPORTING

  return {
    ...oP,
    ...sP,
    marketId,
    isOpenReporting,
    isLogged: sP.isLogged,
    isConnected: sP.isConnected && getValue(sP, 'universe.id') != null,
    isMarketLoaded: sP.marketsData[marketId] != null,
    market,
    loadFullMarket: () => dP.loadFullMarket(marketId),
    submitInitialReport: (marketId, selectedOutcome, invalid, history) => dP.submitInitialReport(marketId, selectedOutcome, invalid, history),
  }
}

const Reporting = withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(ReportingDispute))

export default Reporting
