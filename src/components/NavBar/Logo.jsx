import React from 'react'
import logoLight from '../../assets/icons/icon_light.png'
import logoDark from '../../assets/icons/icon_dark.png'

export default function Logo ({ theme }) {
  return (
    <>
      {
            !theme
              ? <img src={logoLight} width='64px' />
              : <img src={logoDark} width='64px' />
        }
    </>
  )
}
