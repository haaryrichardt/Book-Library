pipeline{
  agent any
  tools {nodejs "node"}
  stages{
    
    
    stage('Build'){
      steps{
        sh 'npm run build'
      }
    }
 /* stage('Upload'){
      steps{
        sh 'mkdir archive'
        sh 'echo build > archive/test.txt'
        zip zipFile: 'test.zip', archive: false, dir: 'archive'
        nexusArtifactUploader artifacts: [[artifactId: 'static', classifier: '', file: 'test.zip', type: 'zip']], credentialsId: 'nexus', groupId: '1', nexusUrl: '45.79.121.91:8081/repository/devops', nexusVersion: 'nexus2', protocol: 'http', repository: 'devops', version: '1.1'
      }
    }*/
    
  }
}
