import dva from 'dva';
import './index.less';
import { createBrowserHistory as createHistory } from 'history';
import { message } from 'antd';

// 1. Initialize
const app = dva({
    history: createHistory(),
    onError(e) {
        message.error(e.message, /* duration */3);
    },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
