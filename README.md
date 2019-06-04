# pnpmfile-repro
pnpmfile issue reproduction repo

issue reproduction steps:

1. `cd packages/test`
2. `pnpm install left-pad` (any package will do)
3. observe `pnpm-lock.yaml`: package example no longer has the dependency of `string-format` or peer dependency of `npm-package-example`

using `pnpm recursive install left-pad --filter .` in the folder succeeds as expected
