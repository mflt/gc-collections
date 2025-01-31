import { buildvite, prompt } from './build'

if (!import.meta.main) {
  prompt.log.warn('The build script was not called directly by bun')
}

await buildvite({
  buildCommonConfig: {},
  viteCommonConfigFn: null
})
