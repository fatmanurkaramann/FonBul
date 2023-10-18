export class LandingModel
{
    title:string;
    description:string;
    images: {
        url: string;
        alt: string;
      }[];

      constructor(title: string, description: string, images: { url: string; alt: string }[]) {
        this.title = title;
        this.description = description;
        this.images = images;
      }
}

