export const ENVIRONMENT={
    SERVER_PORT:process.env.PORT||3001,
    BD_URL_CONNECTION: {
        TESTING:'',
        DEVELOPING: 'mongodb+srv://admin:Admin12345@appdemorest-arilk.mongodb.net/test?retryWrites=true',
        PRODUCTION:''
    },
    ROUTER_MAIN_MODULES:{
        INDEX:'/'
    }
};