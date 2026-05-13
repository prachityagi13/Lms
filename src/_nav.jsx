import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilPeople,
  cilBook,
  cilClipboard,
  cilUser,
  cilSettings,
} from '@coreui/icons'

import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'MAIN',
  },

  {
    component: CNavItem,
    name: 'Overview',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Students',
    to: '/students',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Courses',
    to: '/courses',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Assignments',
    to: '/assignments',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Teachers',
    to: '/teachers',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'SETTINGS',
  },

  {
    component: CNavItem,
    name: 'Preferences',
    to: '/settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
]

export default _nav