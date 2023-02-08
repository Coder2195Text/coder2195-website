
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-us-east-1.hygraph.com/v2/cl8hzzoiu59rq01tccufrg18c/master",
  documents: "graphql/queries.ts",
  generates: {
    "graphql": {
      preset: "gql-tag-operations",
      plugins: []
    }
  }
};

export default config;
