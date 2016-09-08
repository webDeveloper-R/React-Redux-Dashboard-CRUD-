# React Redux Dashboard CRUD


#Running Locally
*You need two terminal windows open*, one for client and the other for server.

####Development
1. In terminal 1, 
	1. `export JWT_SECRET=somesecretstring` <-- This is used to generate JWT tokens.
	2. `export POSTMARK_API_TOKEN=<getApiTokenFromWInPostmark>` <-- Email
	3. `export FROM_EMAIL=<yourFromEmailThatIsRegisteredInPostMark> <-- "From"-Email Address
	4. run `npm start`. This runs the app server (Express). 
2. In terminal 2, run: `npm run dev`. This runs the development server(webpack-dev-server).
3. Open browser and go to: `localhost:8080`

#####Note: If you open `localhost:3000` in browser, you'll see a "stale" production app, so while in development, **always go to `localhost:8080`**

####Production
In production, we need to compile the **latest** client js and place it to `public` folder. This allows the main app server(Express) to also show the final app.

1. Generate latest React app: `npm run build`.
2. In terminal 1, run `npm start`. It will be running both the server and the client.
3. Open browser and go to : `localhost:3000`.


###Making changes to your app and pushing it to Heroku
Everytime you make changes to the front end, you need to build it, and do git commit before pushing it to Heroku test server.

1. `npm run build` #build new React app JS
2. `git add .` #Add change to git
3. `git commit -m "<your comment>" 
4. `git push heroku master`
5. `heroku open`

I usually have something like below that combines all the steps. I just change the commit message everytime.

`npm run build && git add . && git commit -m "made changes" && git push heroku master && heroku open`




