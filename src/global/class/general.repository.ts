import { NotFoundException } from "@nestjs/common";
import { FindConditions, FindOneOptions, Repository } from "typeorm";
import { IBaseParam } from "../interface/iBaseParam.interface";
import { ICreateParam } from "../interface/iCreateParam.interface";
import { IQueryParamByID } from "../interface/iQueryParamByID.interface";
import { IUpdateParam } from "../interface/iUpdateParam.interface";


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
        console.log(`General Repository - getEntityById ${JSON.stringify(entity)}`);
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

    async getEntity(conditions? : FindConditions<T>, options? : FindOneOptions<T>):Promise<T>{
        const entity = await this.findOne(conditions, options);

        if (!entity){
            throw new NotFoundException(`Entity not found`);            
        }

        return entity;
    }
    
}
