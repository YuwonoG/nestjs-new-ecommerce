import { NotFoundException } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { Repository } from "typeorm";
import { IBaseParam } from "./interface/baseParam.interface";
import { ICreateParam } from "./interface/createParam.interface";
import { IQueryParamByID } from "./interface/queryParam.interface";
import { IUpdateParam } from "./interface/updateParam.interface";


export abstract class GeneralRepository<T> extends Repository<T> {
    // abstract async execute(param? : any, user? :User ):Promise<T | void | T[]>;
    abstract async execute(param : IBaseParam | ICreateParam | IUpdateParam | IQueryParamByID):Promise<T | void | T[]>;
    
    
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
    /*
    async createProfile(createDateDTO: CreateProfileDTO, user : User) : Promise<Profile> {
        const {name, maxListing, description} = createDateDTO;
       console.log("Create Profile " +JSON.stringify(user));

       const newProfile = new Profile();
       newProfile.name = name;
       newProfile.maxListing = maxListing;
       newProfile.description = description;
       newProfile.createdByUUID = user.uuid;
       newProfile.updatedByUUID = user.uuid;

       return await newProfile.save();
   }
 
   async updateProfile(updateProfileDTO: UpdateProfileDTO, user : User) : Promise<Profile>{
    const {id, name, maxListing, description, status} = updateProfileDTO;
    console.log('updateProfile - repository');
    console.log(updateProfileDTO);

    const selectedProfile = await this.getProfileById(id);
    selectedProfile.name = name;
    selectedProfile.maxListing = maxListing;
    selectedProfile.description = description;
    selectedProfile.status = status;
    selectedProfile.createdByUUID = user.uuid;
    selectedProfile.updatedByUUID = user.uuid;

    return await selectedProfile.save();
    }
    
    async deleteProfile(id:number, user: User):Promise<void>{
        const profile = await this.getProfileById(id);
        profile.status = RecordStatus.DELETED;
        profile.updatedByUUID = user.uuid;

        profile.save();
    }

    async getProfiles() : Promise<Profile[]> {
        const profiles = await this.find();
        if (!profiles){
            throw new NotFoundException(`Profile has not been defined.`);            
        }
        return profiles;
        
    }

    async getProfileById(id : number):Promise<Profile>{
        const profile = await this.findOne({where : {id : id}});
        if (!profile){
            throw new NotFoundException(`Profile not found`);            
        }
        return profile;
    }
    */
}
