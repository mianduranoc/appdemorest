export const ENVIRONMENT={
    SERVER_PORT:process.env.PORT||3001,
    BD_URL_CONNECTION: {
        TESTING:'',
        DEVELOPING: 'mongodb+srv://admin:Admin12345@appdemorest-arilk.mongodb.net/eva_soft?retryWrites=true',
        PRODUCTION:''
    },
    ROUTES_MAIN_MODULES:{
        INDEX:'/',
        EVENTS:
        {
            NAME_ROUTE:'/api/events',
            ACTIONS:
            {
                GET_ZONES_LIST:'/getzoneslist'
            }
        }
    }
};
export const FORMATS_FOR_DATE_AND_TIME=(date=new Date())=>{
    return {
        DATE_STANDART:date,
        DATE_STRING:date.toDateString(),
        DATE_ISO:date.toISOString(),
        DATE_UTC:date.toUTCString(),
        TIME_STANDART:date.toTimeString(),
        DATE_TIME_SUBDOCUMENT:{
            DATE:{
                YEAR:date.getFullYear(),
                MONTH:date.getMonth()+1,
                DAY:date.getDate()
            },
            TIME:{
                HOUR:date.getHours(),
                MINUTES:date.getMinutes(),
                SECONDS:date.getSeconds()
            }
        },
        DATE:{
            YEAR:date.getFullYear(),
            MONTH:date.getMonth()+1,
            DAY:date.getDate()
        },
        TIME:{
            HOUR:date.getHours(),
            MINUTES:date.getMinutes(),
            SECONDS:date.getSeconds()
        },
        DAY_WEEK:{
            NUMBER:date.getDate()//,
            //TEXT:GET_DAY_WEEK_TEXT(date.getDay())
        }
    }
};