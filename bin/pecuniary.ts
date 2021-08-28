#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { PecuniaryPipelineStack } from '../lib/pecuniary-pipeline-stack';
import { PecuniaryPipelineStage } from '../lib/pecuniary-pipeline-stage';

const app = new App();

new PecuniaryPipelineStack(app, 'pecuniary-pipeline', {
  env: { account: '524849261220', region: 'us-east-1' },
});

// Create dev stack
new PecuniaryPipelineStage(app, 'Dev', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});

app.synth();
