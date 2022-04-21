const fetch = (...args: any[]) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import('node-fetch').then(({ default: fetch }) => fetch(...args))
import * as fs from 'fs'
import { ServerTester } from './ServerTester'

interface ServerResponse {
  total: number
  genre: {
    PPC: number
  }
}

const fileExportPath = 'tekito/path/circuit.json'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const serverMain = async () => {
  // TODO: tekito url
  // const res = await fetch('https://localhost:3000/api/users')
  // const json = (await res.json()) as ServerResponse

  // implementation
  const result = ServerTester.getJson()

  fs.mkdir('tekito/path', { recursive: true }, err => {
    if (err) throw err
  })
  fs.writeFile(fileExportPath, result, err => {
    if (err) throw err
    return
  })
}

serverMain().catch(err => {
  console.log(err)
})
