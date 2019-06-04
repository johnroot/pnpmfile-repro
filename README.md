# pnpmfile-repro
pnpmfile issue reproduction repo

issue reproduction steps:

`cd packages/test`
`pnpm install left-pad` (any package will do)
observe `pnpm-lock.yaml`: package example no longer has the peer dependency of `npm-package-example`

using `pnpm recursive install left-pad --filter .` in the folder succeeds as expected
