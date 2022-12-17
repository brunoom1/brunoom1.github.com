import React from 'react'

import { HeaderMenu } from "./header-menu";
import { HeaderBranding } from "./header-branding"

export const Header = () => {
  return <>
    <div className='d-flex justify-content-between'>
      <HeaderBranding />
      <HeaderMenu />
    </div>
  </>
}