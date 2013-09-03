gbq-schema-tools
================

Experiments with Google Big Query




### Generate PEM file:

```
openssl pkcs12 -in yourp12file.p12 -out file.pem -nodes
```

What is the Google API password for the OAuth PKCS p12 private key?

Answer: notasecret

https://developers.google.com/console/help/#service_accounts

Your application needs the private key when requesting an OAuth 2.0 access token in server-to-server interactions. Google does not keep a copy of this private key, and this screen is the only place to obtain this particular private key. When you click the "Download private key" button, the PKCS #12 formatted private key is downloaded to your local machine. As the screen indicates, you must securely store this key.