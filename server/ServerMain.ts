const fetch = (...args: unknown[]) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import('node-fetch-commonjs').then(({ default: fetch }) => fetch(...args))
import * as fs from 'fs'
import { CircuitBuilder } from './CircuitBuilder'

const genres = [
  'PPC',
  'Web',
  'Crypto',
  'Binary',
  'Pwn',
  'Misc',
  'Shell',
  'Forensics',
  'OSINT'
] as const

export type Genre = typeof genres[number]

export interface ServerResponse {
  total: number
  genre: Record<Genre, number>
}
export interface ServerResponseRaw {
  total: number
  genre: { genre: Genre; solvedCount: number }[]
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const serverMain = async () => {
  const isDebug = false
  // TODO: fix url
  const res = await fetch('https://cpctf.space/api/visualizer')
  const jsonRaw = (await res.json()) as ServerResponseRaw
  const mapper: Record<Genre, number> = {
    PPC: 0,
    Web: 0,
    Crypto: 0,
    Binary: 0,
    Pwn: 0,
    Misc: 0,
    Shell: 0,
    Forensics: 0,
    OSINT: 0
  }
  jsonRaw.genre.map(value => {
    mapper[value.genre] = value.solvedCount
  })
  const json: ServerResponse = {
    total: jsonRaw.total,
    genre: mapper
  }

  // implementation
  let result = ''
  if (isDebug) {
    result = CircuitBuilder.build(CircuitBuilder.dummyServerResponse)
  } else {
    result = CircuitBuilder.build(json)
  }
  // TODO: !!generated in local!!
  const basepath = process.env.EXPORT_DIR ?? './'
  const filepath = `${basepath}/circuit.json`
  fs.mkdir(basepath, { recursive: true }, err => {
    if (err) throw err
  })
  fs.writeFile(filepath, result, err => {
    if (err) throw err
    console.log('successfully exported')
    return
  })
}

serverMain().catch(err => {
  console.log(err)
})
