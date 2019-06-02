import { Request, Response} from 'express';
import * as HTTPStatus from 'http-status';
import * as _ from 'lodash';
import Handlers from '../../api/resposeHandlers'
import avCalculator from './service';

//the controler class is used to make the connection between the UserRouter class and the Service class 
//And returns the result of the promisses of the service class methods.

class avCalculatorController {



    constructor(){};

    getRwyInUse(req: Request, res: Response){
        const variables = {
            rwy1:  Number(req.params.rwy1),
            rwy2: Number(req.params.rwy2),
            wind: Number(req.params.wind),
            dec: Number(req.params.dec),
            dir: req.params.dir
            
        }
        avCalculator
        .runwayInUse(variables)
        .then(_.partial(Handlers.onSucess, res))
        .catch(_.partial(Handlers.onError, res, 'Error Calculate Runway in Use'));
    }

    idealOfDescent(req: Request, res: Response){

        const variables = {
            crzAlt:Number(req.params.crzAlt),
            targetAlt:Number(req.params.targetAlt),
            descentRate:Number(req.params.descentRate),
            speed:Number(req.params.speed)
        }

        avCalculator
        .idealOfDescent(variables)
        .then(_.partial(Handlers.onSucess, res))
        .catch(_.partial(Handlers.onError, res, 'Error Calculate Runway in Use'));

    }

}

export default new avCalculatorController();