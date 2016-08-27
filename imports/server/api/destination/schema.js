import { Poi, Destination } from '/imports/lib/collections';
import {check} from 'meteor/check';


export const schema = [`

    type GroundImage {
        image: String
        north: Float
        south: Float
        east: Float
        west: Float
    }
    
    type Destination {
      _id: String
      slug: String
      title: String
      subtitle: String
      mainImage: MediaImage
      groundImage: GroundImage
      pois: [Poi]
    }

`];


export const resolvers = {
    Query: {
        async destination(root, { slug }) {
            console.log(slug);
            console.log(Destination.findOne({slug: slug}));
            return Destination.findOne({slug: slug});
        }
    },
    Destination: {
        groundImage: ({ groundImage }) => groundImage,
        mainImage: ({mainImage}) => mainImage,
        pois: ({slug}) => {
            console.log(slug);
            return Poi.find({region: slug}).fetch();
        }
    }
};