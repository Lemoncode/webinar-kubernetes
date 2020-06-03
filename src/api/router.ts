import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getBeers, getBeer } from './controller.ts'

const router = new Router()
router.get('/beers', getBeers)
.get('/beers/:id', getBeer)

export default router