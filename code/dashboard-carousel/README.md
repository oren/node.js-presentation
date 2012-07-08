This is the source code for the Dashboard carousel project.
It displays our different dashboards in one webpage.

There are 4 projects in this repo:

* website - display the reports
* screenshot-service - take screenshots of our reports
* image-updater - ping a report url on a given interval and update the image using the screenshot-service
* image-uploader - upload the images to a given server(only needed if website project on a different machine)

Wat?
---

Every 5 minutes the image-updater ping the urls of our reports.  
If url is alive, it uses the screenshot-service to get a screenshot of the url and saves it in public/reports folder of the website.  
The website just display whatever images are in public/reports.  
If the website is on a separate server, the image-uploder can be used to upload the snapshots to the website server.

Setup
-----

Install Node
 
      sudo su  
      yum install openssl-devel  
      cd /usr/local/src  
      wget http://nodejs.org/dist/v0.6.14/node-v0.6.14.tar.gz  
      tar zxvf node-v0.6.14.tar.gz   
      cd node-v0.6.14  
      ./configure  
      make  
      make install   
      
      # to install npm packages without sudo
      sudo chown -R $USER /usr/local 

Install PhantomJS
    http://www.phantomjs.org/
    (on mac I got the binary and added it to the path)

Run
---

    cd website
    sudo node website.js
    # to load production config - sudo NODE_ENV=production node website.js

    cd screenshot-service
    node screenshot_service.js

    cd image-updater
    node image-updater.js

    cd image-uploader
    node image-uploader.js

Deploy
------

    rsync -avr --delete --exclude ".git" --progress ~/misc/projects/work/dashboard-carousel ogolan@dashboards.np.wc1.yellowpages.com:~/

Daemon
------
screen 

useful commands
---------------
screen -ls
screen -rD
ps aux|grep phantomjs | awk '{print $2}' xargs kill -9
