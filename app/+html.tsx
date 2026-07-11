import { ScrollViewStyleReset } from 'expo-router/html'
import { type PropsWithChildren } from 'react'

const FAVICON =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%23fce7f3'/><text x='50' y='54' font-size='60' text-anchor='middle' dominant-baseline='central'>💇‍♀️</text></svg>"

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Salão na Mão</title>
        <link rel="icon" href={FAVICON} />
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  )
}
