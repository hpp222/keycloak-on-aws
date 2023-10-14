import { App, assertions } from 'aws-cdk-lib';
import { KeycloakStack } from '../src/stack';

test('Snapshot', () => {
  const app = new App();
  const stack = new KeycloakStack(app, 'test', { fromExistingVPC: true });
  const t = assertions.Template.fromStack(stack);
  t.resourceCountIs('AWS::S3::Bucket', 0);
  expect(t).toMatchSnapshot();
});