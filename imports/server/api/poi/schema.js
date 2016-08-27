import { Poi, MediaGallery } from '/imports/lib/collections';
import {check} from 'meteor/check';


export const schema = [`

    type Poi {
        _id: String
        type: String
        region: String
        title: String
        subtitle: String
        shortDescription: String
        description: String
        phone: String
        mail: String
        iconName: String
        lat: Float
        lng: Float
        mainImage: MediaImage
    }

`];


export const resolvers = {
    Query: {
        async allPois(root, {}) {
            //get the pois
            return Poi.find().fetch();
        },
        async poiForRegion(root, {region}) {
            //get the pois for the provided region...
            return Poi.find({region: region}).fetch();
        }
    },
    Poi: {
        mainImage: ({mainImage}) => mainImage
    }
};