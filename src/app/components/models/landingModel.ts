export class LandingModel
{
    id:string;
    title:string;
    description:string;
    description2:string;

    images:string;
    style:string;

      constructor(id:string,title: string, description: string,description2: string, images:string,style:string) {
        this.id=id;
        this.title = title;
        this.description = description;
        this.description2 = description2;

        this.images = images;
        this.style=style;
      }
}

