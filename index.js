const app = require('./app');
const {port} = require('./Config/config');

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})