# FINSIM_TEST

 - Frontend was made with Angular 
 -- in folder **finsim-ng**
 - Frontend is running in node Express http://localhost:4100/
 -- in folder **app-fe**
 - Backend proxy is running in node Express http://localhost:4101/ to enable CORS 
 -- in folder **app-proxy**

#### Clone repo
```
git checkout https://github.com/kakarlus/finsim-test.git
```

#### Installation
```
// Angular npm i and build
cd finsim-ng
npm i
ng b --prod

// express frontend host
cd ../app-fe
npm i

// express backend proxy
cd ../app-proxy
npm i
```

#### Running Servers
```
cd app-fe
node index.js

// open a new terminal
cd app-proxy
node index.js
```