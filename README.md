
# UI.

### Create a single page, Infinite scroll implementation based on paginated JSON feeds.

# You are provided the following feeds that provide data to render a bunch of articles.
#### https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1
#### https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/2
#### https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/3

### And so on(If you run into a CORS issue, you can perhaps try adding a backend channel via ExpressJS orsomething).

### Each feed is a collection of nodes. And each node looks like this.

node: {
title: &quot;Rocky Aur Rani Ki Prem Kahani: Alia Bhatt &amp; Ranveer
Singh&#39;s BTS photos that broke the internet&quot;,
nid_dont_use: &quot;1&quot;,
field_photo_image_section:
&quot;/files/styles/photogallery/public/alia-main_5.jpg?itok=MyGkzVzQ&quot;,
path: &quot;/photos/alia-bhatt/rocky-aur-rani-ki-prem-kahani-alia-
bhatt-ranveer-singh-s-bts-photos-broke-internet-956134&quot;,
nid: &quot;956134&quot;,
photo_image_nids: &quot;956129,956130,956131,956132,956133&quot;,
ImageStyle_thumbnail:
&quot;/files/styles/imagestyle_1_1/public/alia-main_5.jpg?itok=9gh31HFJ&quot;
}


# Task:
### Render a 1 column view, by using the title, field_photo_image_section and path torender something like this.
![image](https://user-images.githubusercontent.com/43093582/213653047-f755e0cb-6046-4d71-a4ba-98b5176179f8.png)

### When the user reaches the button of these page, pull in data from the next page.

http://www.pinkvilla.com/photo-gallery-feed-page/page/1 and add the new items to the existing.
list of articles and keep doing this until you reach a page with has no more data..

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
