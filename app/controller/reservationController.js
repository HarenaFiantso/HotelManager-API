//Model methods imports
import * as model from "../models/reservationModel.js"

export const insertReservation = (req,res)=>{
    model.insertReservation(req.body).then(()=>
        res.status(200)
    ).catch((e) => {
        res.status(500)
        throw e
    })
}

export const getOneReservations = (req,res)=>{
    model.oneReservations(req.params.id).then((results)=>{
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
        throw e
    });
}