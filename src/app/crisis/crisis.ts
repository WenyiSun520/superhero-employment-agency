export class Crisis{
    id:string
    name:string
    description:string
    location:string

    constructor(id:string, name:string, description:string, location:string){
        this.id = id;
        this.name = name;
        this.description = description
        this.location = location
    }

    setDescription(description:string){
        this.description = description
    }

    setName(name:string){
        this.name = name;
    }

    setLocation(location:string){
        this.location = location
    }
}