
import { z, defineCollection } from 'astro:content';


const blog = defineCollection({

    schema:({image}) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
    }),

});



export const collections = { blog };










