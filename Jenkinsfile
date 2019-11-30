pipeline {
  agent any
  stages {
    stage('Update modules') {
      steps {
        sh 'npm audit fix'
      }
    }

  }
}