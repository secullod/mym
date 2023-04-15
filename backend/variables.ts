import * as dotenv from 'dotenv'

dotenv.config()
export const JWT_SECRET = process.env.JWT_SECRET || ""
export const PORT = process.env.PORT || 8000
export const MONGO_DB = process.env.MONGO_DB || 'mongodb://mongodb:27017/mym'
