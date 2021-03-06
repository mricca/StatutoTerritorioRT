/*
 * Copyright 2019, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'


export default ({label, children, className="py-3 border-bottom-2 border-top-2"}) => (
    <div  className={"py-3 border-bottom-2 border-top-2"}>
        <h2 className="m-0">
        {children ? children : label}
        </h2>
    </div>
    )