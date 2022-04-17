/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/04/14 22:08:38 (GMT+0900)
 */
import { Plugin } from 'vite'

export default function VitePluginRemoveTestAttributes(): Plugin {
  return {
    name: 'BuildRemoveTestAttributes',
    apply: 'build',
    transform(src: string) {
      return {
        code: src.replace(/"data-test-id": "\w+",?/g, ''),
      }
    },
  }
}
