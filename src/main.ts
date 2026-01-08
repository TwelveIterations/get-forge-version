import * as core from '@actions/core'
import { findForgeVersion } from './version.js'

export async function run(): Promise<void> {
  try {
    const minecraftVersion: string = core.getInput('minecraftVersion', {
      required: true
    })
    const channel: string = core.getInput('channel', {
      required: false
    })

    const result = await findForgeVersion({ minecraftVersion, channel })

    if (result) {
      core.setOutput('version', result)
    } else {
      core.setFailed('No matching Forge version found')
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
