#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DemoStack } from './../lib/demo-stack';
import { DemoPipelineStack } from './../lib/demo-pipeline-stack';

const app = new cdk.App();
// new DemoStack(app, 'DemoStack', {
  
// });
new DemoPipelineStack(app, 'DemoPipeline', {});
