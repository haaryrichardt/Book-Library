pipeline{
  agent any
  tools {nodejs "node"}
  stages{
    stage('Install Dependencies'){
      steps{
        sh 'npm install'
      }
    }
    
    stage('Build'){
      steps{
        sh 'npm run build'
      }
    }
  stage('Build'){
      steps{
sh 'zip -r build$BUILD_NUMBER.zip build/'
        nexusArtifactUploader artifacts: [[artifactId: 'static', classifier: '', file: 'build$BUILD_NUMBER.zip', type: 'zip']], credentialsId: 'nexus', groupId: '1', nexusUrl: '45.79.121.91:8081/repository/devops', nexusVersion: 'nexus2', protocol: 'http', repository: 'devops', version: '1.1'
      }
    }
    
  }
}
