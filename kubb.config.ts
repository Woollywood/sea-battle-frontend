import { defineConfig } from '@kubb/core'
import { pluginClient } from '@kubb/plugin-client'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTs } from '@kubb/plugin-ts'
import { pluginVueQuery } from '@kubb/plugin-vue-query'

const concatLines = (lines: string[]) => `${lines.join(' \n ')}\n`

const banner = concatLines([
  '/* eslint-disable @typescript-eslint/no-explicit-any */',
  '/* eslint-disable @typescript-eslint/no-unused-vars */',
  '/* eslint-disable @typescript-eslint/ban-ts-comment */',
  '/* eslint-disable @typescript-eslint/no-invalid-void-type */',
  '// @ts-nocheck',
])

export default defineConfig(() => {
  return {
    root: '.',
    input: {
      path: 'http://localhost:8080/swagger/json',
    },
    output: {
      path: './app/api/generated',
      clean: true,
      write: true,
    },
    plugins: [
      pluginOas({
        validate: true,
        group: {
          type: 'tag',
          name({ group }) {
            return `${group}Controller`
          },
        },
      }),
      pluginTs({
        output: {
          path: './types',
          banner,
        },
        group: {
          type: 'tag',
          name: ({ group }) => `${group}Controller`,
        },
        enumType: 'asConst',
        enumSuffix: 'Enum',
        dateType: 'date',
        unknownType: 'unknown',
        optionalType: 'questionTokenAndUndefined',
        oasType: false,
      }),
      pluginClient({
        output: {
          path: './clients/axios',
          barrelType: 'named',
          banner,
        },
        group: {
          type: 'tag',
          name: ({ group }) => `${group}Service`,
        },
        operations: true,
        importPath: '@/api/client',
      }),
      pluginVueQuery({
        output: {
          path: './hooks',
          banner,
        },
        group: {
          type: 'tag',
          name: ({ group }) => `${group}Hooks`,
        },
        client: {
          dataReturnType: 'data',
          importPath: '@/api/client',
        },
        mutation: {
          methods: ['post', 'patch', 'put', 'delete'],
        },
        infinite: {
          queryParam: 'page',
          initialPageParam: 1,
          cursorParam: 'nextCursor',
        },
        query: {
          methods: ['get'],
          importPath: '@tanstack/vue-query',
        },
      }),
    ],
  }
})
