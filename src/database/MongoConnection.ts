import mongoose from 'mongoose'
import { config } from '../config/Constants'
export class MongoConnection {
	public async connect(): Promise<void> {
		try {
			await mongoose.connect(config.MONGO_CONNECTION)
			// await mongoose.connect(config.MONGO_CONNECTION, { , useUnifiedTopology: true })
			console.log('Database connected')
		} catch (err) {
			console.error(err.message)
			process.exit(1)
		}
	}
}
