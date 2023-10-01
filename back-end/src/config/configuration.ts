import { registerAs } from "@nestjs/config";


export default registerAs('config', () => ({
    database: {
        host: "mongodb+srv://user:cqMfc4FQmPA0Ew3R@cise-cluster.wmeyhzt.mongodb.net/?retryWrites=true&w=majority"
    }
}));