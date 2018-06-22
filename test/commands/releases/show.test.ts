import {expect, test} from '@oclif/test'

describe('show releases', () => {
  test
  .stdout()
  .command(['releases:show', '-a', 'intense-crag-70741'])
  .it('displays the app name', ctx => {
    expect(ctx.stdout).to.contain('intense-crag-70741')
  })

  // test
  // .stdout()
  // .command(['releases:show', '--name', 'jeff'])
  // .it('runs releases:show --name jeff', ctx => {
  //   expect(ctx.stdout).to.contain('hello jeff')
  // })
})
