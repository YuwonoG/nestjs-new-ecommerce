import { NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { IBaseParam } from "../interface/baseParam.interface";
import { ICreateParam } from "../interface/createParam.interface";
import { IQueryParamByID } from "../interface/queryParamByID.interface";
import { IUpdateParam } from "../interface/updateParam.interface";


export abstract class GeneralRepository<T> extends Repository<T> {

    abstract async execute(param : IBaseParam | ICreateParam<T> | IUpdateParam<T> | IQueryParamByID<T>):Promise<T | T[] | void>;
    
    
    async getAllEntities() : Promise<T[]> {
        const entities = await this.find();
        if (!entities){
            throw new NotFoundException(`Entity has not been defined.`);            
        }
        return entities;
        
    }

    async getEntityById(id : string | number ):Promise<T>{
        const entity =  await this.findOne({where : {id : id}});

        if (!entity){
            console.log('Not Found Exception');
            throw new NotFoundException(`Entity not found`);            
        }
        
        return  entity ;
    }

    async getEntityByUUID(uuid : string):Promise<T>{
        const entity = await this.findOne({where : {uuid : uuid}});

        if (!entity){
            throw new NotFoundException(`Entity not found`);            
        }
        return entity;
    }
    
}
