import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { CodePipeline, CodePipelineSource, ShellStep } from '@aws-cdk/pipelines';
import { PecuniaryPipelineStage } from './pecuniary-pipeline-stage';

export class PecuniaryPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'Pecuniary-Pipeline',

      crossAccountKeys: true,

      // Synthesize CDK
      synth: new ShellStep('Synth', {
        // Pecuniary application stack
        // TODO Rename the repo once it is moved
        input: CodePipelineSource.gitHub('eric-bach/pecuniary-pipeline', 'main'),

        // Install dependencies, build and run cdk synth
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      }),
    });

    // Dev environment stage with tests
    const dev = new PecuniaryPipelineStage(this, 'Dev', {
      env: { account: '524849261220', region: 'us-east-1' },
    });
    pipeline.addStage(dev, {
      post: [
        new ShellStep('TestService', {
          commands: [
            // Use 'curl' to GET the given URL and fail if it returns an error
            'curl -Ssf $ENDPOINT_URL',
          ],
          envFromCfnOutputs: {
            // Get the stack Output from the Stage and make it available in
            // the shell script as $ENDPOINT_URL.
            ENDPOINT_URL: dev.urlOutput,
          },
        }),
      ],
    });

    // Prod environment
    pipeline.addStage(
      new PecuniaryPipelineStage(this, 'Prod', {
        env: { account: '830221499166', region: 'us-west-2' },
      })
    );
  }
}
