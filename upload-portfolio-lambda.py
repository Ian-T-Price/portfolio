"""
S3 Zipfile Upload script.

Script to upload from a zip in an S3 build bucket to a deploy bucket
"""

import boto3
import io
import zipfile
import mimetypes

s3 = boto3.resource('s3')

portfolio_bucket = s3.Bucket('portfolio.iantprice.com')
build_bucket = s3.Bucket('portfoliobuild.iantprice.com')
portfolio_zip = io.BytesIO()

build_bucket.download_fileobj(
  'f71d657c-2b8b-4c84-823f-c20d2e60bd87/portfoliobuild.zip', portfolio_zip)

with zipfile.ZipFile(portfolio_zip) as myzip:
    for nm in myzip.namelist():
        obj = myzip.open(nm)
        portfolio_bucket.upload_fileobj(obj, nm,
          ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
        portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
