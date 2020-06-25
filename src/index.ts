import { FuncParse } from '@iarna/toml'

let parse: FuncParse;
export function loadToml(filepath: string, content: string) {
  if (parse === undefined) {
    const toml = require('@iarna/toml');
    parse = toml.parse
  }

  try {
    const result = parse(content);
    return result;
  } catch (error) {
    error.message = `TOML Error in ${filepath}:\n${error.message}`;
    throw error;
  }
}
