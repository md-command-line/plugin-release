import {expect, test} from '@oclif/test'

describe('check -a application connectivity', () => {
  test
  .stdout()
  .command(['ask', '-a', 'repository-dashboard'])
  .it('show application name', ctx => {
    expect(ctx.stdout).to.contain('repository-dashboard')
  })
})
describe('check --all application connectivity', () => {
  test
  .stdout()
  .command(['ask', '--all', 'repository-dashboard'])
  .it('show application name', ctx => {
    expect(ctx.stdout).to.contain('repository-dashboard')
  })
})
