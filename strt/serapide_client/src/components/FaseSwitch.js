/*
 * Copyright 2019, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import classNames from 'classnames'
import {toggleControllableState} from 'enhancers'

const enhancer = toggleControllableState("checked", "toggle", false)
export default enhancer(({fase, className, checked, toggle, goToSection, children}) => (
    <React.Fragment>
        <div className={classNames("d-flex", "flex-column",className)}>
            <div className="d-flex pb-1" >
                <i className="material-icons">folder_open</i>
                <span className="pl-2 text-uppercase">{fase}</span>
            </div>
            <div className="d-flex strt-switch" >
                <div className="custom-control custom-switch border-top pt-2">
                    <label onClick={toggle} className={classNames('custom-control-label','pointer', {"border-serapide bg-serapide": checked, checked})}/>
                    Visualizza attività
                </div>
                <div className="d-flex border-top pl-2 pt-2">
                    <i className="material-icons pointer text-serapide" onClick={goToSection}>exit_to_app</i>
                    <label className="control-label pl-1">Vai alla sezione</label>
                </div>
            </div>
        </div>
    {checked && children}
    </React.Fragment>
    ))