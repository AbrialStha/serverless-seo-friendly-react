import Loadable from './utls/loadable'

export const AboutMe = Loadable({
    loader: () => import('./components/AboutMe')
})

export const Footer = Loadable({
    loader: () => import('./components/Footer')
})

export const Subscribe = Loadable({
    loader: () => import('./components/Subscribe')
})

export const BlogHome = Loadable({
    loader: () => import('./components/BlogHome')
})

export const BlogPost = Loadable({
    loader: () => import('./components/BlogPost')
})

export const About = Loadable({
    loader: () => import('./components/AboutPage')
})

export const Search = Loadable({
    loader: () => import('./components/SearchPage')
})

export const categoryHome = Loadable({
    loader: () => import('./components/CategoryHome')
})