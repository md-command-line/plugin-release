import {expect, test} from '@oclif/test'

describe('check application connectivity', () => {
  test
  .stdout()
  .command(['ask', '-a', 'intense-crag-70741'])
  .it('show application name', ctx => {
    expect(ctx.stdout).to.contain('intense-crag-70741')
  })
})
