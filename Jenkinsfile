pipeline {
    agent any

    stages {
        stage('clean') {
            steps {
                sh 'rm -rf /home/ec2-user/nodeFiles/public/*'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('deploy'){
        	steps{
        		sh 'cp /home/ec2-user/.jenkins/workspace/shopripe-frontend/build/* /home/ec2-user/nodeFiles/public/'
        	}
        }
    }    
}