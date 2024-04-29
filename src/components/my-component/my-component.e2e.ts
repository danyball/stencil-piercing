import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component first="foo"></my-component2>');
    const element = await page.find('my-component >>> .label');

    expect(element).toEqualText("Hello, World! I'm foo");
  });
});
