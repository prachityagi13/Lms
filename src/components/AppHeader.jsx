import React from 'react'

import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
} from '@coreui/react'

const AppHeader = () => {
  return (
    <CHeader
      position="sticky"
      className="custom-header px-4"
    >
      <CContainer fluid>

        <CHeaderBrand className="fw-bold text-white fs-4">
          EduFlow Admin
        </CHeaderBrand>

        <CHeaderNav>
          <div className="profile-circle">
            P
          </div>
        </CHeaderNav>

      </CContainer>
    </CHeader>
  )
}

export default AppHeader