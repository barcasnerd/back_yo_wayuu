import {App} from './app';
import {APP_VARIABLES} from "../../../../common/config/app-variables.config";


const port = APP_VARIABLES.APP_PORT || 2980;


export function startApp(preventListen: boolean = false) {
    const app = App();
    if (!(preventListen || APP_VARIABLES.NODE_ENV === "test")) {
        app.listen(port, () => {
            console.log('App started on port ' + port);
        });
    }
    return app;
}



