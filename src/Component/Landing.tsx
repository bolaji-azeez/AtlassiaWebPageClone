import { Careers } from './Careers'
import { Footer } from './Footer'
import { Paper } from './Paper'
import {Dive }   from './Dive'
import Hero  from './Hero'
import { Teams } from './Teams'
import { Essentials } from './Essensial'

export const Landingpage:React.FC = () => {
  return (
    <div>
        <Hero />
        <Paper />

        <Dive />
        <Teams />
        <Essentials />
        <Careers />
        <Footer />
    </div>
  )
}