import { merge } from 'lodash';


import { schema as mediaGallerySchema, resolvers as mediaGalleryResolver } from './mediaGallery/schema';
import { schema as poiSchema, resolvers as poiResolver } from './poi/schema';
import { schema as destinationSchema, resolvers as destinationResolver } from './destination/schema';


const rootSchema = [`

    type Query {
       allMediaImages: [MediaImage] 
       mediaImage(id: String): MediaImage
       allPois: [Poi]
       poiForRegion(region: String): [Poi]
       destination(slug: String): Destination
    }
    
    type Mutation {
        addMediaImage(name: String, cdnUrl: String): MediaImage
    }

    schema {
      query: Query
      mutation: Mutation 
    }

`];

export const Schema = [...rootSchema, ...mediaGallerySchema, ...poiSchema, ...destinationSchema];
export const Resolvers = merge(mediaGalleryResolver, poiResolver, destinationResolver);

