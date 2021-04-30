import Home from '@/views/Home'
import Work from '@/views/Work'
import About from '@/views/About'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

export default routes
