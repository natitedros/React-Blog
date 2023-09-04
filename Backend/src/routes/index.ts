import express from 'express'
import blogRoutes from './blogRoutes';

const router = express.Router()

export default (): express.Router => {
    blogRoutes(router)
    return router;
}