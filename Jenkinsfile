pipeline {
 
    agent any
 
    stages {

        tools {
            nodejs('26.1.0')
        }
 
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/daniel-thoughtline/fullstack-starter.git'
            }
        }
 
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh '''
                        npm install
                        npm run build
                    '''
                }
            }
        }
 
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh '''
                        npm install
                    '''
                }
            }
        }
 
        stage('Docker Build') {
            steps {
                sh '''
                    docker compose build
                '''
            }
        }
 
        stage('Run Containers') {
            steps {
                sh '''
                    docker compose down --remove-orphans || true
 
                    docker rm -f react_frontend || true
                    docker rm -f node_backend || true
                    docker rm -f postgres_db || true
 
                    docker compose up -d
                '''
            }
        }
    }
}