# FINSIM_TEST

 - Frontend was made with Angular 
 -- in folder **finsim-ng**
 - Frontend is running in node Express http://localhost:4100/
 -- in folder **app-fe**
 - Backend proxy is running in node Express http://localhost:4101/ avoid browser and angular triggering CORS 
 -- in folder **app-proxy**

#### Clone repo
```
git clone https://github.com/kakarlus/finsim-test.git
```

#### Installation
```
// Angular npm i and build
cd finsim-ng
npm i

// build with angular cli
ng b --prod

// if you don't have angular cli installed globally (npx is available only for npm v6.6.0 and above)
npx ng b --prod

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

#### Ready for viewing in browser

open your browser and link enter url http://localhost:4100/
