import { createClient } from 'honox/client'

createClient({
    hydrate: async (elem, root) => {
      const { hydrateRoot } = await import('react-dom/client')
      hydrateRoot(root, elem as any)
    },
    createElement: async (type: any, props: any) => {
      const { createElement } = await import('react')
      const element = createElement(type, props)
      return element as unknown as Node
    },
  })
