# Pecuniary Pipeline

CDK pipeline for deploying [Pecuniary](https://github.com/eric-bach/pecuniary) application

## Getting Started

    TBA

## Deployment

### Deploy via CDK CLI

See [pecuniary](https://github.com/eric-bach/pecuniary/README.md)

### Setup CodePipeline (optional)

1a. Bootstrap CDK toolkit stack (in Dev account)

```
cdk bootstrap --toolkit-stack-name aws-cdk-toolkit-managed-default aws://ACCOUNT1/us-east-1 --profile ACCOUNT1_AdministratorAccess
```

1b. Bootstrap CDK toolkit stack (in Dev account) using policy for AWS CodePipeline

```
npx cdk bootstrap --toolkit-stack-name aws-cdk-toolkit-managed-default --profile ACCOUNT1_AdministratorAccess --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://ACCOUNT1/us-east-1
```

2. Bootstrap CDK toolkit stack (in Prod account) with trust to Dev account

```
npx cdk bootstrap --toolkit-stack-name aws-cdk-toolkit-managed-default --profile ACCOUNT2_AdministratorAccess --trust ACCOUNT1 --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://ACCOUNT2/us-west-2
```

3. Deploy Pipeline Stack. Once the pipeline is created, the app will be automatically deployed through the pipeline

```
npx cdk deploy --profile ACCOUNT1_AdministratorAccess pecuniary-pipeline
```

## Teardown

1. Delete `Prod-Pecuniary` stack in `ACCOUNT2`

2. Delete `cdk-hnb659fds-assets-ACCOUNT2-us-west-2` S3 bucket in `ACCOUNT2`

3. Delete `Dev-Pecuniary` stack in `ACCOUNT1`

4. Delete `pecuniary-pipeline-support-us-west-2` stack in `ACCOUNT1`

5. Delete `pecuniary-pipeline stack` in `ACCOUNT1`

6. Delete `cdk-hnb659fds-assets-ACCOUNT1-us-east-1 bucket` in `ACCOUNT1`

7. Delete `pecuniary-pipeline-pipelineartifactsbucketaea9a05-49mdxpbwg4fp` bucket in `ACCOUNT1`

8. Delete `pecuniary-pipeline-supporeplicationbucketa69889098cf5973421d4` bucket in `ACCOUNT1`
