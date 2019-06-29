import React from 'react'
import "./Grid.css"

export const Grid= ({children, className}) => <div className={"Grid " + className}>
    {children}
</div>

export const Col= ({children, size="full"}) => <div className={"Col " + size}>
    {children}
</div>
