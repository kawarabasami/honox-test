import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'
import { QRCodeSVG } from 'qrcode.react'

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono'
  return c.render(
    <div className="py-8 text-center">
      <title>{name}</title>
      <h1 className="text-3xl font-bold">Hello, {name}!</h1>
      <Counter />
      <div className="flex justify-center py-8">
      <QRCodeSVG value="https://honox.dev" />
      </div>
    </div>
  )
})
