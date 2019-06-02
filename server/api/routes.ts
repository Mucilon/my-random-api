'use strict';

import { Application, Request, Response } from 'express';
import UserRoutes from '../modules/user/routes';
import TokenRoutes from '../modules/auth/auth';
import AuthorRoutes from '../modules/author/routes';
import PostRoutes from '../modules/post/routes';
import AvCalculatorRoutes from '../modules/avcalculator/routes';

//Class responsible for starting the API routes, request authentication
//and call the modules responsible for executing the route

class Routes {

    constructor(){}

    initRoutes(app: Application, auth: any): void{
        app.route('/api/users/all').all(auth.config().authenticate()).get(UserRoutes.index);
        app.route('/api/users/create').all(auth.config().authenticate()).post(UserRoutes.create);
        app.route('/api/users/:id').all(auth.config().authenticate()).get(UserRoutes.findOne);
        app.route('/api/users/:id/update').all(auth.config().authenticate()).put(UserRoutes.update);
        app.route('/api/users/:id/destroy').all(auth.config().authenticate()).delete(UserRoutes.destroy);
        app.route('/token').post(TokenRoutes.auth);

        
        app.route('/api/author/all').get(AuthorRoutes.index);
        app.route('/api/author/create').post(AuthorRoutes.create);
        app.route('/api/author/:id').get(AuthorRoutes.findOne);
        app.route('/api/author/:id/update').put(AuthorRoutes.update);
        app.route('/api/author/:id/destroy').delete(AuthorRoutes.destroy);

        app.route('/api/post/all').get(PostRoutes.index);
        app.route('/api/post/create').post(PostRoutes.create);
        app.route('/api/post/:id').get(PostRoutes.findOne);
        app.route('/api/post/:id/update').put(PostRoutes.update);
        app.route('/api/post/:id/destroy').delete(PostRoutes.destroy);

        app.route('/api/avcalculator/getrwyinuse/:rwy1/:rwy2/:wind/:dec/:dir').get(AvCalculatorRoutes.getRwyInUse)
    }

}

export default new Routes();