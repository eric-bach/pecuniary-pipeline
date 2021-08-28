import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { PecuniaryAppStack } from './pecuniary-app-stack';

export class PecuniaryPipelineStage extends Stage {
  public readonly urlOutput: CfnOutput;

  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new PecuniaryAppStack(this, 'Pecuniary');

    // Expose CdkpipelinesDemoStack's output one level higher
    this.urlOutput = service.urlOutput;
  }
}
