export async function findForgeVersion(options: {
  minecraftVersion: string
  channel: string
}): Promise<string | undefined> {
  const { minecraftVersion, channel } = options
  if (!minecraftVersion || typeof minecraftVersion !== 'string') {
    throw new Error('minecraftVersion is not a string')
  }
  if (!channel || typeof channel !== 'string') {
    throw new Error('channel is not a string')
  }

  const response = await fetch(
    'https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json'
  )
  const json = (await response.json()) as { promos: Record<string, string> }
  const version = json.promos[minecraftVersion + '-' + channel]
  if (version) {
    return version
  }

  return undefined
}
