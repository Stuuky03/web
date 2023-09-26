import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:8080/graphql',
  generates: {
    'src/utils/types/__generated__/': {
      preset: 'client',
      documents: ['src/**/*.{ts,tsx}'],
      config: {
        nonOptionalTypename: true
      },
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
}

export default config;