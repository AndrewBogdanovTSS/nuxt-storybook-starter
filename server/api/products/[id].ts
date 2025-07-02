export default defineEventHandler(async (e) => {
  const id = getRouterParam(e, 'id')
  return await useStorage().getItem(`assets/server/products/product-${id}.json`)
})
