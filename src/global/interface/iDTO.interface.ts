export interface iDTO<T>{    
    _dto : T;
    getDTO<T>(): any | T;

    // getKeys():string[];
}