import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";


export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .post('', this.createHouse)
    }

    async createHouse(request, response, next) {
        try {
            const house = await housesService.createHouse(request.body)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }
}