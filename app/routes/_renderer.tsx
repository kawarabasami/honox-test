import { reactRenderer } from '@hono/react-renderer'

export default reactRenderer(({ children,title }) => {
  const href = import.meta.env.PROD
    ? 'static/assets/style.css'
    : '/app/style.css'
  return (
    <html lang="ja">
    <head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      {import.meta.env.PROD ? (
        <script type='module' src='/static/client.js'></script>
      ) : (
        <script type='module' src='/app/client.ts'></script>
      )}
      <link rel="stylesheet" href={href} />
      {title ? <title>{title}</title> : ''}
    </head>
    <body>{children}</body>
    </html>
  )
})
