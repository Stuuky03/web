import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8080/graphql',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    'src/utils/types/__generated__/': {
      preset: 'client',
    },
  },
}

export default config;