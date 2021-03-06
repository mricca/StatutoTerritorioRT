/*
 * Copyright 2019, GeoSolutions SAS.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Azioni from 'components/TabellaAzioni'
import FaseSwitch from 'components/FaseSwitch'
import components from './actions'

import classNames from 'classnames'
import { getAction, pollingInterval} from 'utils'
import {canExecuteAction} from '../autorizzazioni'
import {stopStartPolling} from 'enhancers'

import {camelCase} from 'lodash'
// import {map, snakeCase} from 'lodash'


const polling = stopStartPolling(pollingInterval)

const getCurrentAction = (url = "", pathname = "") => {
    return pathname.replace(url, "").split("/").filter(p => p !== "").shift()
}

const showAdozione = (f) => f === "AVVIO" || f === "ADOZIONE" || f === "APPROVAZIONE" || f === "PUBBLICAZIONE"
const showApprovazione = (f) => f === "ADOZIONE" || f === "APPROVAZIONE" || f === "PUBBLICAZIONE"
const showPubblicazione = (f) => f === "APPROVAZIONE" || f === "PUBBLICAZIONE"

const NotAvailable = () => (<div className="p-6">Azione non implementata</div>)

export default class Home extends React.PureComponent{

render () {

    const {match: {url, path} = {},
           location: {pathname} = {}, history, utente = {}, piano = {},
           azioni = [],
           startPolling, stopPolling} = this.props;
    
    const action = getCurrentAction(url, pathname)
    const scadenza = azioni.filter(({node: {tipologia}}) => tipologia.toLowerCase().replace(" ","_") === action).map(({node: {data, }}) => data).shift()
    const goToAction = (action = "", uuid) => {
        history.push(`${url}/${action.toLowerCase().replace(" ","_")}/${uuid}`)
    }
    const {fase: {nome: nomeFase}} = piano
    const goBack = () => {
        history.push(url)
    }
    return (
    <div className="d-flex pb-4 pt-5">
        <div className={classNames("d-flex flex-column flex-1", {"flex-fill": !action})}>
            <div className="d-flex border-serapide border-top border-bottom py-4 justify-content-around">
                <span>LEGENDA</span>
                <span className="d-flex"><i className="material-icons text-serapide mr-2">alarm_add</i><span>E’ richiesta un’azione</span></span>
                <span className="d-flex"><i className="material-icons text-serapide mr-2">alarm_on</i><span>In attesa di risposta da altri attori</span></span>
                <span className="d-flex"><i className="material-icons text-serapide mr-2">alarm_off</i><span>Nessuna azione richiesta</span></span>
            </div>
            {showPubblicazione(nomeFase) && (<FaseSwitch className="mt-3" initValue={nomeFase==="APPROVAZIONE"} fase="pubblicazione" goToSection={() => history.push(url.replace("home","pubblicazione"))}>
                <div className="py-4">
                    <Azioni azioni={azioni} filtroFase="approvazione" onExecute={goToAction}/>
                </div>
            </FaseSwitch>)}
            {showApprovazione(nomeFase) && (<FaseSwitch className="mt-3" initValue={nomeFase==="ADOZIONE"} fase="approvazione" goToSection={() => history.push(url.replace("home","approvazione"))}>
                <div className="py-4">
                    <Azioni azioni={azioni} filtroFase="adozione" onExecute={goToAction}/>
                </div>
            </FaseSwitch>)}
            {showAdozione(nomeFase) && (<FaseSwitch className="mt-3" initValue={nomeFase==="AVVIO"} fase="adozione" goToSection={() => history.push(url.replace("home","adozione"))}>
                <div className="py-4">
                    <Azioni azioni={azioni} filtroFase="avvio" onExecute={goToAction}/>
                </div>
            </FaseSwitch>)}
            <FaseSwitch className="mt-3" initValue={nomeFase==="ANAGRAFICA"} fase="avvio" goToSection={() => history.push(url.replace("home","avvio"))}>
                <div className="py-4">
                    <Azioni azioni={azioni} onExecute={goToAction}/>
                </div>
            </FaseSwitch>
        </div >
        <div className={classNames("d-flex flex-column", {"ml-2  pl-3 flex-3 border-left": action})} style={action ? {minWidth: 500}: {}}>
            {action && <div  className="mb-3 close  align-self-end" onClick={() => history.push(url)}>x</div>}
            <Switch>
                {azioni.filter(({node: {attore, tipologia}}) => attore.toLowerCase() === utente.attore.toLowerCase() || tipologia === "OSSERVAZIONI_ENTI").map(({node: {uuid, stato = "", tipologia = "",label = "", attore = ""}}) => {
                    const tipo = tipologia.toLowerCase()
                    const El = components[camelCase(tipo)] && polling(components[camelCase(tipo)])
                    return El && (
                            <Route exact key={tipo} path={`${path}/${tipo}/${uuid}`} >
                                {getAction(stato) && canExecuteAction({attore, tipologia}) ? (<El startPolling={startPolling} stopPolling={stopPolling} piano={piano} back={goBack} utente={utente} scadenza={scadenza}/>) : (<Redirect to={url} />)}
                            </Route>)
                })}
                {/* {map(components, (El, key) => {
                    const tipo = snakeCase(key)
                    
                    return El && (
                            <Route key={key} path={`${path}/${tipo}`} >
                                <El piano={piano} back={goBack} utente={utente} scadenza={scadenza}/>
                            </Route>)
                })} */}
                { action && (
                <Route path={path}>
                    <NotAvailable/>
                </Route>)}
            </Switch>
        </div>
    </div>
)}

}