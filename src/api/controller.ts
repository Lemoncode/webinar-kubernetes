import {IBeer} from './ibeer.ts';
import {getById, getAll} from './dbcontext.ts'
  
const getBeers = async ({ response }: { response: any }) => { 
    const beers: IBeer[] | undefined = await getAll()
    if (beers && beers.length > 0) {
        response.status = 200
        response.body = beers
    }
    else {
        response.status = 404;
        response.body = {message: 'No beers'}
    }
  }
  
  const getBeer = async ({ params, response }: { params: { id: string }; response: any }) => {
    const beer: IBeer | undefined = await getById(params.id)
    if (beer) {
      response.status = 200
      response.body = beer
    } else {
      response.status = 404
      response.body = { message: `Beer not found.` }
    }   
  }
  

  export { getBeer, getBeers}