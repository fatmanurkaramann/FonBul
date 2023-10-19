export class LandingModel
{
    id:string;
    title:string;
    description:string;
    images: {
        url: string;
        alt: string;
      }[];
    style:string;

      constructor(id:string,title: string, description: string, images: { url: string; alt: string }[],style:string) {
        this.id=id;
        this.title = title;
        this.description = description;
        this.images = images;
        this.style=style;
      }
}

