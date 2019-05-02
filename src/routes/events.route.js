import express from 'express';
import {ENVIRONMENT} from "../ENV";

import
{
    GetZonesList,
    PostZone,
    DeleteZone,
    UpdateZone
} from '../controllers/events.controller';

const router=express.Router();
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_ZONES_LIST,GetZonesList);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_ZONES,PostZone);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DELETE_ZONE,DeleteZone);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.UPDATE_ZONE,UpdateZone);

module.exports=router;