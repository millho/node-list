import { dbContext } from "../db/DbContext.js"


class HousesService {
    async createHouse(houseData) {
        const house = await dbContext.House.create(houseData)
        return house
    }
}

export const housesService = new HousesService