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
    
    stage('Serve'){
      steps{
        sh 'npm run serve'
      }
    }
    
  }
}
