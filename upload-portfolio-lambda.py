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
  'portfoliobuild.zip', portfolio_zip)

with zipfile.ZipFile(portfolio_zip) as myzip:
    for nm in myzip.namelist():
        obj = myzip.open(nm)
        mimetype = mimetypes.guess_type(nm)
        if mimetype[0] is None:
            portfolio_bucket.upload_fileobj(obj, nm)
        else:
            portfolio_bucket.upload_fileobj(obj, nm,
                ExtraArgs={'ContentType': mimetype[0]})
        # This fails on unknown file types .jpeg or .png
        # portfolio_bucket.upload_fileobj(obj, nm,
        #    ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
        portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
