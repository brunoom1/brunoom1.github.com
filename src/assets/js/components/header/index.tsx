import React from 'react'

import { HeaderMenu } from "./header-menu";
import { HeaderBranding } from "./header-branding"

export const Header = () => {
  return <div className="navbar bg-light">
    <div className={['container-fluid', 'justify-content-between'].join(' ')}
      style={{flex: 1}}
    >
      <HeaderBranding />
      <HeaderMenu />
    </div>
  </div>
}