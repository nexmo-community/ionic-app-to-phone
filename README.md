# ReactNative App to Phone

<img src="https://developer.nexmo.com/assets/images/Vonage_Nexmo.svg" height="48px" alt="Nexmo is now known as Vonage" />

This is an [Ionic](https://ionicframework.com) project that uses the [Client SDK](https://developer.nexmo.com/client-sdk/overview) to call a phone number. 

## Welcome to Vonage

If you're new to Vonage, you can [sign up for a Vonage API account](https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=) and get some free credit to get you started.

## Running the project
Clone the project to your computer, using the terminal:

`git clone git@github.com:nexmo-community/ionic-app-to-phone.git`

Install the dependencies with [npm](http://npmjs.com):

`npm install`

Package the build files:

`npm run build`

Start the Ionic dev server:

`ionic serve`

After replacing the JWT in [`home.tsx`](https://github.com/nexmo-community/ionic-app-to-phone/blob/2ba25e7d451f4412ddc90a8a6f85928bc3aef388/src/pages/Home.tsx#L13) you can now make a call from the web.

### iOS:

Make sure your dev server is running or run it again with `ionic serve --no-open`. In a new terminal window expose your dev server to the internet with [localtunnel](https://github.com/localtunnel/localtunnel), replacing `SUBDOMAIN` with a unique string:

`npx localtunnel --port 8100 --subdomain=SUBDOMAIN`

In a new terminal window navigate to your project directory and run the iOS project with this command, where `SUBDOMAIN` is the same string from above:

`ionic capacitor run ios -l --external --livereload-url=https://SUBDOMAIN.loca.lt`

Once this is done, will open Xcode where you can build and run (CMD + R) the project. 

### Android:

Make sure your dev server is running or run it again with `ionic serve --no-open`. In a new terminal window expose your dev server to the internet with [localtunnel](https://github.com/localtunnel/localtunnel), replacing `SUBDOMAIN` with a unique string:

`npx localtunnel --port 8100 --subdomain=SUBDOMAIN`

In a new terminal window navigate to your project directory and run the iOS project with this command, where `SUBDOMAIN` is the same string from above:

`ionic capacitor run android -l --external --livereload-url=https://SUBDOMAIN.loca.lt`

Once this is done, will open Android Studio where you can build and run (CTRL + R) the project. 



## Getting Help

We love to hear from you so if you have questions, comments or find a bug in the project, let us know! You can either:

* Open an issue on this repository
* Tweet at us! We're [@VonageDev on Twitter](https://twitter.com/VonageDev)
* Or [join the Vonage Developer Community Slack](https://developer.nexmo.com/community/slack)

## Further Reading

* Check out the Developer Documentation at <https://developer.nexmo.com>
