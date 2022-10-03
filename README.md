# tvmaze-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Personal
- As an originally backender but trying to be full-stack, I have used mostly Angular & React before. I have the least experience with Vue 3. I worked a lot with design systems as well. So I decided not to use vite, bootstrap 4 or material design. So I made it much difficult to myself :)  

### Decisions
- The project is created by using Vue CLI.
- `axios` is a nice library to handle http request and responses with the ability to cancel requests. 
- `api` folder is responsible from API request & responses.
- `services` folder contains the logic we need to transform the data we fetched from server. We could use stores to do this as well. 
- `components` folder contains components used in any view.
- `views` folder contains pages of the website.
- `tests` folder contains unit & e2e tests. You can run them using the scripts above.
- `registerServiceWorker` is for PWA.
- Component declarations are inconsistent because I wanted to use with and without `<script setup>`.
- Stylings are inconsistent because I wanted to show both usages of `scss` and `css`. 
- Many styling variables in the components can move to `_variables.scss`.
- Husky would be nice addition as well.
- For Architectural Decisions, I would use [ADR tooling](https://adr.github.io).