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
  * React
  * Webpack
  * Chi & Mocca
  * Jest
  * AWS Lambda
  * AWS IAM
  * AWS Route53
  * AWS CloudFront
  * AWS CodeBuild
  * AWS CodePipeline
  * AWS S3
  * AWS Boto3

---
## Change Log

1. Changed the git host from GitLab to GitHub with seemingly no issues - magic

---
## Top Level pipeline description

1. Code
2. => VCS - Store versions of code (GitHub)
3. => AWS CodePipeline - build pipeline (Webhook from VCS change)
4. => AWS CodeBuild - Build .zip file (called by CodePipeline)
5. => AWS Lambda - deploy .zip file (called by CodePipeline)

## Outline description of the pipeline

1. Code developed locally (or on GitHub...)
2. Changes committed to VCS

   We are using GitHub for the VCS as AWS CodeBuild has hooks for GitHub  
   The repo is <https://github.com/Ian-T-Price/portfolio.git>

3. AWS CodePipeline processed triggered

   A webhook on changes in the repo starts the pipeline processed

4. AWS CodeBuild triggered by CodePipeline

   We have set the webhook to rebuild every time a change is made to the repo  
   **Ensure this is not changed** otherwise the zip file is not always uploded
   The CodeBuild project is __buildPortfolio__

5. CodeBuild the .zip file using the files in buildspec.yml

   The CodeBuild project is using nodejs:7.0.0  
   buildspec.yml is the standard file for CodeBuild

6. CodeBuild places the zip file in an S3 bucketName

   The file is named __portfoliobuild.zip__  
   and the S3 bucket is __portfoliobuild.iantprice.com__  

7. Set permissions for the CodeBuild project

   CodeBuild uses the __codebuild-buildPortfolio-service-role__ role for permissions  
   A KMS key is used for encryption __arn:aws:kms:eu-west-2:389685695569:alias/aws/s3__  

8. CodePipeline triggers AWS Lambda to deploy the .zip file

   The Lambda function is __deployPortfolio__ which is using the code
   in __upload-portfolio-lambda.py__

   This is a Python 3.6 script that requires the following to be set as
   environment variables:

    * bucketName          e.g. portfoliobuild.iantprice.com
    * objectKey           e.g. portfoliobuild.zip
    * portfolio_bucket    e.g. portfolio.iantprice.com
    * sns_arn             e.g. arn:aws:sns:eu-west-2:389685695569:deployPortfolioTopic  

   A success or failure email is sent at the end of the function

9. The result will be found at <https://iantprice.com/index.html>
