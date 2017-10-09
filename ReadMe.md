# Ian T Price's Portfolio

Following ACloudGuru's Serverless Portfolio course

## Technologies used to date:

  * Atom Editor
  * venv virtual environments from Python 3.6
  * Git, GitHub & GitLab
  * SSH
  * HTML
  * CSS
  * Fonts Awesome
  * Google Fonts

---
## Change Log

1. Changed the git host from GitLab to GitHub with seemingly no issues - magic

---
## Top Level description of the pipeline

1. Code developed locally (or on GitHub)
2. Changes committed to VCS

   We are using GitHub for the VCS as AWS CodeBuild has hooks for GitHub  
   The repo is <https://github.com/Ian-T-Price/portfolio.git>

3. AWS CodeBuild webhook is triggered

   We have set the webhook to Rebuild every time a change is made to the reporter  
   The CodeBuild project is __buildPortfolio__

4. Build the .zip file using the files in buildspec.yml

   The CodeBuild project is using nodejs:7.0.0  
   buildspec.yml is the standard file for CodeBuild

5. Place the zip file in an S3 bucketName

   The file is named __portfoliobuild.zip__  
   and the S3 bucket is __portfoliobuild.iantprice.com__  

6. Set permissions for the CodeBuild project

   CodeBuild uses the __codebuild-buildPortfolio-service-role__ role for permissions
   A KMS key is used for encryption __arn:aws:kms:eu-west-2:389685695569:alias/aws/s3
