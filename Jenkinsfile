pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('react')
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Saket-Rathor/Shopykart2.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Dockerize App') {
            steps {
                sh 'sudo docker build -t saket039/react-app .'
            }
        }
        stage('Push To DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: "react",
                    usernameVariable: "dockerHubUser", 
                    passwordVariable: "dockerHubPass"
                )]) {
                    sh 'echo $dockerHubPass | docker login -u $dockerHubUser --password-stdin'
                    sh 'docker image tag saket039/react-app:latest ${dockerHubUser}/react-app:latest'
                    sh 'docker push ${dockerHubUser}/react-app:latest'
                }
            }
        }
    }
}
