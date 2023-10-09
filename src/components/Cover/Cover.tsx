"use client"
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'
import { optionsParticles } from './particleOptions'
import { Introduction } from '../Introduction'
import About from '../About/About'
import { Services } from '../Services/Services'

export function Cover() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])
    return (
        <div id='cover'>
            <Particles 
             className='absolute w-full h-full translate-z-0'
             id='tsparticles'init={particlesInit} loaded={particlesLoaded}
             options={optionsParticles}
            />
            <Introduction />
        </div>
    )
}
export function CoverAbout() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])
    return (
        <div id='cover'>
            <Particles 
             className='absolute w-full h-full translate-z-0'
             id='tsparticles'init={particlesInit} loaded={particlesLoaded}
             options={optionsParticles}
            />
            <About />
        </div>
    )
}

export function CoverServices() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])
    return (
        <div id='cover'>
            <Particles 
             className='absolute w-full h-full translate-z-0'
             id='tsparticles'init={particlesInit} loaded={particlesLoaded}
             options={optionsParticles}
            />
            <Services />
        </div>
    )
}
