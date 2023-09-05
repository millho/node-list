import BaseController from "../utils/BaseController.js";


export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .post('', this.createHouse)
    }

    async createHouse(request, response, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
}