export interface Heroes {
    
    name:String,
    picture:any,
    publisher:String,
    info:String
}
export interface HeroesHome{
    name:String,
    picture:any
}

export interface storageHeroes{
    allHeroes:HeroesHome[],
    vibilityFilter:"SHOW_ALL"
}
