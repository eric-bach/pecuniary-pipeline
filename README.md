# Pecuniary Pipeline

CDK pipeline for deploying [Pecuniary](https://github.com/eric-bach/pecuniary-v3) application

## Getting Started

    TBA

## Deployment

### Deploy via CDK CLI

See [pecuniary-v3](https://github.com/eric-bach/pecuniary-v3/README.md))

### Setup CodePipeline (optional)

1a. Bootstrap CDK toolkit stack (in Dev account)

```
cdk bootstrap --toolkit-stack-name aws-cdk-toolkit-managed-default aws://524849261220/us-east-1 --profile 524849261220_AdministratorAccess
```

1b. Bootstrap CDK toolkit stack (in Dev account) using policy for AWS CodePipeline

```
npx cdk bootstrap --toolkit-stack-name aws-cdk-toolkit-managed-default --profile 524849261220_AdministratorAccess --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://524849261220/us-east-1
```

2. Bootstrap CDK toolkit stack (in Prod account) with trust to Dev account

```
npx cdk bootstrap --toolkit-stack-name aws-cdk-toolkit-managed-default --profile 830221499166_AdministratorAccess --trust 524849261220 --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://830221499166/us-west-2
```

3. Deploy Pipeline Stack. Once the pipeline is created, the app will be automatically deployed through the pipeline

```
npx cdk deploy --profile 524849261220_AdministratorAccess pecuniary-pipeline
```

## Teardown

1. Delete `Prod-Pecuniary` stack in `830221499166`

2. Delete `cdk-hnb659fds-assets-830221499166-us-west-2` S3 bucket in `830221499166`

3. Delete `Dev-Pecuniary` stack in `524849261220`

4. Delete `pecuniary-pipeline-support-us-west-2` stack in `524849261220`

5. Delete `pecuniary-pipeline stack` in `524849261220`

6. Delete `cdk-hnb659fds-assets-524849261220-us-east-1 bucket` in `524849261220`

7. Delete `pecuniary-pipeline-pipelineartifactsbucketaea9a05-49mdxpbwg4fp` bucket in `524849261220`

8. Delete pecuniary-pipeline-supporeplicationbucketa69889098cf5973421d4 bucket in 524849261220
