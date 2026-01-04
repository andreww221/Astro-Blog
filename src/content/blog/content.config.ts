
import { z, defineCollection } from 'astro:content';



const blog = defineCollection({

    schema: z.object({
        title: z.string(),
        permalink: z.string().optional(),
    }),

});




export const collections = {blog};










