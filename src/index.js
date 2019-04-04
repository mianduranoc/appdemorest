import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import {ENVIRONMENT} from "./ENV";
const app=express();

app.listen(ENVIRONMENT.SERVER_PORT,async()=>{
    try{
        console.log("Express ejecutado correctamente");
        mongoose.connect(ENVIRONMENT.BD_URL_CONNECTION.DEVELOPING,{useNewUrlParser:true})
            .then(()=>{
                console.log('Successful connection to MongoDB');
                app.get(ENVIRONMENT.ROUTER_MAIN_MODULES.INDEX,(req,res)=>{
                    res.status(200);
                    res.send("¡Hola Mundo! ¡Successful Connection to MongoDB");
                    res.end();
                });
            }).catch(err=>{
                app.get(ENVIRONMENT.ROUTER_MAIN_MODULES.INDEX,(req,res)=>{
                    res.status(500).send('error',{'error':err});
                    res.end();
                });
            });
    }
    catch (err) {
        app.get(ENVIRONMENT.ROUTER_MAIN_MODULES.INDEX,(req,res)=>{
            res.status(500).send('error',{'error':err});
            res.end();
        });
    }
});

