import { join } from 'path'
import { cosmiconfigSync } from 'cosmiconfig'
import { loadToml } from '../'

describe('loader', () => {
  const explorer = cosmiconfigSync('cosmiconfig-toml-loader', { loaders: { '.toml': loadToml } })

  test('should load a valid config file', () => {
    const result = explorer.load(join(__dirname, './__fixtures__/valid-test-config.toml'))
    expect(result?.config).toStrictEqual({ foo: 'bar' })
  })

  test('should fail when config file is invalid', () => {
    const parse = () => explorer.load(join(__dirname, './__fixtures__/invalid-test-config.toml'))
    expect(parse).toThrow('TOML Error in')
  })
})
