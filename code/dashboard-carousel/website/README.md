This is the source code for the Dashboard carousel website.
It displays our different dashboards in one webpage

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

Run
---

    sudo node server.js
    # production - NODE_ENV=production sudo node server

Deploy
------

    rsync -avr --delete --exclude ".git" --progress ~/misc/projects/work/dashboard-carousel ogolan@dashboards.np.wc1.yellowpages.com:~/

Daemon
------
screen 

useful commands
---------------
screen -ls
screen -r

