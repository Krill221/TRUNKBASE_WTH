#!sh
bun init
bun cypress install
bun i cypress
bun i dotenv --save
bun i @badeball/cypress-cucumber-preprocessor
bun i -D @cypress/webpack-preprocessor
bun add -D typescript @types/node
bun i ts-loader
bun i serve
bun cypress run
# npx cypress open
# copy cypress config from
# change config different integrations: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples