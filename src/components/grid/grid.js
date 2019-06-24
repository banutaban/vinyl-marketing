import React from 'react'
import "./Grid.css"

export const Grid= ({children}) => <div className="Grid">
    {children}
</div>

export const Col= ({children, size="full"}) => <div className={"Col " + size }>
    {children}
</div>
