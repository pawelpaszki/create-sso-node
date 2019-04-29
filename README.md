# create-sso-node

## Requirements

node installed (checked with node 10)

## Running

1. clone the repo
2. change the values of:

```
const CUSTOMER_ADMIN_USERNAME = '';
const CUSTOMER_ADMIN_PASSWORD = '';
const SSO_URL = '';
```

to the values for your cluster

3. Change the .json content to suit your needs
4. Run the script: 
```
node createUserScript.js
```
