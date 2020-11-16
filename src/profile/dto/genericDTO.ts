import { iDTO } from "./dto.interface";

export class GenericDTO implements iDTO{
    getKeys(): string[] {
        return Object.keys(this);
    }

}