# React + Vite Setup Guide

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Setting Up Without Docker and Jenkins

1. **Update System Packages**  
   ```bash
   sudo apt update
Install NVM (Node Version Manager)

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads bash completion

Install Node.js Using NVM
nvm install 20
node --version

Clone the Repository
git clone https://github.com/Saket-Rathor/Shopykart2.git
cd Shopykart2

Install Dependencies and Start the Project
npm install
npm start
npm run dev

IF YOU GETTING ERROR-
npm install vite@latest
npm install sass@latest
npm cache clean --force
npm ls sass
npm run dev


Configure EC2 Security Group
Add port 5173 to the EC2 security group inbound rules.
Mask it with the EC2 instance public IP <...>.

FOR AUTOMATION
Install Docker:
sudo apt-get install docker.io
sudo usermod -aG docker $USER
newgrp docker

Update System Packages and Install Java
sudo apt update
sudo apt install fontconfig openjdk-17-jre
java -version

Install Jenkins:
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins

Configure Jenkins:
sudo usermod -aG docker jenkins
sudo systemctl restart jenkins

Add Jenkins Port to EC2 Security Group

Add port 8080 to the EC2 security group inbound rules.

Retrieve Jenkins Initial Admin Password
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

sudo apt update
sudo apt install nodejs npm -y

IF PIPELINE BUILD FAILED USE
sudo visudo
jenkins ALL=(ALL) NOPASSWD: /usr/bin/docker(paste in visudo)


