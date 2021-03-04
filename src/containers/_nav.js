import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
      _tag: 'CSidebarNavDropdown',
      name: 'Sitio Web',
      route: '/web-site',
      icon: 'cil-calculator',
      _children: [
          {
              _tag: 'CSidebarNavItem',
              name: 'Editar Contenidos',
              to: '/web-site/edit-content'
          },
          {
              _tag: 'CSidebarNavItem',
              name: 'Traducciones Generales',
              to: '/web-site/general-translations'
          },
          {
              _tag: 'CSidebarNavItem',
              name: 'Blog',
              to: '/web-site/blog'
          },
          {
              _tag: 'CSidebarNavItem',
              name: 'Configuración General',
              to: '/web-site/general-settings'
          },
      ]
  },
  {
      _tag: 'CSidebarNavDropdown',
      name: 'Usuarios',
      route: '/users',
      icon: 'cil-user',
      _children: [
          {
              _tag: 'CSidebarNavItem',
              name: 'Contacto',
              to: '/users/contact'
          },
          {
              _tag: 'CSidebarNavItem',
              name: 'Newsletter',
              to: '/users/newsletter'
          }
      ]
  },
  {
      _tag: 'CSidebarNavDropdown',
      name: 'Gestión',
      route: '/management',
      icon: 'cil-user',
      _children: [
          {
              _tag: 'CSidebarNavItem',
              name: 'Usuarios',
              to: '/management/users'
          }
      ]
  },
]

export default _nav
