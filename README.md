# Frontend Developer Challenge Linx

A challenge for Linx's Frontend Developer Job

[![Netlify Status](https://api.netlify.com/api/v1/badges/419e83c7-d6df-4f45-b7d9-2cac88c7743e/deploy-status)](https://app.netlify.com/sites/challenge-linx/deploys)

Watch the live demo here: https://guisalmeida-linx.netlify.app/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

You should have installed the [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) .

### Installing

A step by step to get a development env running

Clone the repository

```
git clone https://github.com/GuiSAlmeida/linx-frontend-developer-challenge.git
```

and access the project folder

```
cd linx-frontend-developer-challenge/
```
install dependencies

```
npm install
```

to up local server and view page in browser
```
npm run server
```

## Deployment

This project uses a pre-push hook with steps that analyzes and prevents mistakes before deploy,
make sure that ok using the following command:
```
npm run lint
```
and run the following command to generate production files on public folder
```
npm run build
```

## Built With

* [Husky](https://github.com/typicode/husky) - Pre-push hook.
* [Webpack](https://webpack.js.org/) - Bundle JS modules.
* [Babel](https://babeljs.io/) - Transpiler ES6+.
* [Sass](https://sass-lang.com/) - CSS pre-processor.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Author

[**Guilherme Almeida**](https://guisalmeida.com)

See also the list of [contributors](https://github.com/GuiSAlmeida/linx-frontend-developer-challenge/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
